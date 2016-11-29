'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const bcyrpt = require('bcrypt-as-promised');
const ev = require('express-validation');
const validations = require('../../validations/players');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/players', (_req, res, next) => {
  knex('players')
    .orderBy('id')
    .then((rows) => {
      const players = camelizeKeys(rows);

      res.send(players);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/players', ev(validations.post), (req, res, next) => {
  const { email, password, firstName, lastName, age, country, bio } = req.body;

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
          const player = camelizeKeys(rows[0]);

          delete player.hashedPassword;

          res.send(player);
        })
        .catch((err) => {
          next(err);
        });
    });
});

router.get('/players/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('players')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(
          404,
          'Not Found'
        );
      }

      const player = camelizeKeys(row);

      res.send(player);
    })
    .catch((err) => {
      next(err);
    });
});
router.patch('/players/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('players')
    .where('id', id) // since you already assigned it a variable, you should use it
    .first()
    .then((player) => {
      if(!player) {
        throw boom.create(404, 'Not Found');
      }

      const { title, author, genre, description, coverUrl } = req.body;
      const updateplayer = {};

      if (title || title.trim()) { // says the trim is better
        updateplayer.title = title;
      }

      if (author) {
        updateplayer.author = author;
      }

      if (genre) {
        updateplayer.genre = genre;
      }

      if (description) {
        updateplayer.description = description;
      }

      if (coverUrl) {
        updateplayer.coverUrl = coverUrl;
      }

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
