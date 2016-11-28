'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const bcyrpt = require('bcrypt-as-promised');
const ev = require('express-validation');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/users', ev(validations.post), (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .where('email', email)
    .then((rows) => {
      if (rows.length) {
        return next(boom.create(400, 'Email already exists'));
      }

      bcyrpt.hash(password, 12)
        .then((hashedPassword) => {
          const insertUser = { email, hashedPassword };

          return knex('users').insert(decamelizeKeys(insertUser), '*');
        })
        .then((rows) => {
          const user = camelizeKeys(rows[0]);

          delete user.hashedPassword;

          res.send(user);
        })
        .catch((err) => {
          next(err);
        });
    });
});

module.exports = router;
