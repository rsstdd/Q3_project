'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const bcyrpt = require('bcrypt-as-promised');
const ev = require('express-validation');
const validations = require('../validations/players');
const jwt = require('jsonwebtoken');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.verify = err === null;
    next();
  });
};

router.get('/players', (_req, res, next) => {
  knex('players')
    .orderBy('id')
    .then((rows) => {
      let players = camelizeKeys(rows);

      res.send(players);
    })
    .catch((err) => {
      next(err);
    });
});

// ev(validations.post),
router.post('/players', (req, res, next) => {
  /* eslint-disable max-len */
  const { email, password, firstName, lastName, age, country, bio, imgUrl } = req.body;

  // age = parseInt(age);

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }
  if (!password || password.length < 8) {
    return next(boom.create(400, 'Password must be at least 8 characters long'));
  }
  if (!firstName || !firstName.trim()) {
    return next(boom.create(400, 'First Name must not be blank'));
  }
  if (!lastName || !lastName.trim()) {
    return next(boom.create(400, 'Last Name must not be blank'));
  }
  if (!country || country.length < 8) {
    return next(boom.create(400, 'Country Must not be blank'));
  }
  if (!bio || !bio.trim()) {
    return next(boom.create(400, 'Bio must not be blank'));
  }
  if (!imgUrl || !imgUrl.trim()) {
    return next(boom.create(400, 'imgUrl must not be blank'));
  }

  knex('players')
    .where('email', email)
    .then((rows) => {
      if (rows.length) {
        return next(boom.create(400, 'Email already exists'));
      }

      bcyrpt.hash(password, 12)
        .then((hashedPassword) => {
          const insertPlayer = { email, hashedPassword, firstName, lastName, age, country, bio };

          return knex('players').insert(decamelizeKeys(insertPlayer), '*');
        })
        .then((rows) => {
          let players = camelizeKeys(rows);

          delete players.hashedPassword;

          res.send(players);
        })
        .catch((err) => {
          next(err);
        });
    });
});

router.get('/player/:id', authorize, (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('players')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(
          'Not Found'
        );
      }

      const players = camelizeKeys(row);

      res.send(players);
    })
    .catch((err) => {
      next(err);
    });
});

// validate the post
router.patch('/players/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('players')
    .where('id', id)
    .first()
    .then((player) => {
      if (!player) {
        throw boom.create(404, 'Not Found');
      }

      const { email, password, firstName, lastName, age, country, bio } = req.body;
      const updateplayer = {};

      return knex('players')
        .update(decamelizeKeys(updateplayer), '*')
        .where('id', req.params.id);
    })
    .then((rows) => {
      const player = camelizeKeys(rows[0]);

      res.send(player);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/players/:id', (req, res, next) => {
  let player;
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(Number.parseInt(id))) {
    return next();
  }

  knex('players')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      player = camelizeKeys(row);

      return knex('players')
        .del()
        .where('id', id);
    })
    .then(() => {
      delete player.id;

      res.send(player);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
