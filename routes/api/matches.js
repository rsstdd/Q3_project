'use strict';

const express = require('express');
const knex = require('../../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

// const authorize = function(req, res, next) {
//   jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return next(boom.create(401, 'Unauthorized'));
//     }
//
//     req.token = decoded;
//
//     next();
//   });
// };

// router.get('/matches', (_req, res, next) => {
//   knex('matches')
//   .orderBy('id')
//     .then((rows) => {
//       const matches = camelizeKeys(rows);
//
//       res.send(matches);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.get('/matches', (req, res, next) => {
  const { userId } = req.token;

  knex('matches')
    .innerJoin('players', 'players.id', 'matches.player1_id')
    .where('matches.user_id', userId)
    .orderBy('players.title', 'ASC')
    .then((rows) => {
      const matches = camelizeKeys(rows);

      res.send(matches);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/matches/check', (req, res, next) => {
  const { userId } = req.token;
  const { playerId } = req.query;

  if (Number.isNaN(Number.parseInt(playerId))) {
    return next(boom.create(400, 'player ID must be an integer'));
  }

  knex('matches')
    .innerJoin('players', 'players.id', 'matches.player_id')
    .where('matches.user_id', userId)
    .where('players.id', playerId)
    .first()
    .then((row) => {
      if (!row) {
        return res.send(false);
      }

      res.send(true);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/matches/:id', (req, res, next) => {

  knex('matches')
    .where('player_id', req.query.playerId)
    .then((matches) => res.send(matches.length > 0))
    .catch((err) => {
      next(err)
    });
});

router.post('/matches/', (req, res, next) => {
  const { userId } = req.token;
  const { playerId } = req.body;

  if (Number.isNaN(Number.parseInt(playerId))) {
    return next(boom.create(400, 'player ID must be an integer'));
  }

  const match = { playerId, userId };

  knex('players')
   .where('id', playerId)
   .first()
   .then((row) => {
     if (!row) return next(boom.create(404, 'player not found'));

     return knex('matches')
      .insert(decamelizeKeys(match), '*')
      .then((rows) => {
        const insertFav = camelizeKeys(rows[0]);

        res.send(insertFav); // then give me what I just inserted into the DB
      })
      .catch((err) => {
        next(err);
      });
   })
    .catch((err) => {
      next(err);
    });
});

router.delete('/matches', (req, res, next) => {
  let match;
  const  { playerId }  = req.body;

  if(isNaN(Number.parseInt(playerId))) {
    return next(boom.create(400, 'player ID must be an integer'));
  }

  knex('matches')
   .where('player_id', playerId)
   .first()
   .then((row) => {
     if (!row) return next(boom.create(404, 'match not found'));

      match = row;

      return knex('matches')
        .del()
        .where('player_id', playerId);
    })
    .then(() => {
      delete match.id;
      const jsonmatch = camelizeKeys(match);

      res.clearCookie('matches');
      res.send(jsonmatch);
    })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;
