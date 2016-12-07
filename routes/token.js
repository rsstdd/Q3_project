'use strict';

const express = require('express');
const knex = require('../knex');
const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const { camelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.verify = err === null;
    next();
  });
};

router.post('/token', (req, res, next) => {
  const { email, password } = req.body;
  let user;

  // if (!email || !email.trim()) {
  //   return next(boom.create(400, 'Username must not be blank'));
  // }
  //
  // if (!password || password.length < 8) {
  //   return next(boom.create(400, 'Password must not be blank'));
  // }

  knex('players')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/token', (req, res, _next) => {
  res.clearCookie('token');
  res.status(200);
  res.send(true);
});

router.get('/token', (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.send(!Boolean(err));
  });
});

module.exports = router;
