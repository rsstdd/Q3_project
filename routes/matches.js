'use strict';

const express = require('express');
const knex = require('../knex');
const boom = require('boom');
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

router.get('/api/matches', (req, res, next) => {
  knex.raw(
    `SELECT * FROM matches INNER JOIN players ON players.id = matches.p1_id`
  )
    .then((rows) => {
      const matches = camelizeKeys(rows);

      res.send(matches.rows);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/matches/:id', (req, res, next) => {
  const { playerId } = Number.parseInt(req.body);

  if (Number.isNaN(playerId)) {
    return next();
  }

  knex.from('matches')
    .innerJoin('players', 'matches.p1_id', 'players.id')
    .where('matches.p1_id', playerId)
    .orWhere('matches.p2_id', playerId)
    .then((rows) => {
      const matches = camelizeKeys(rows);

      res.send(matches);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/matches/', (req, res, next) => {
  let { p1Id, p2Id, scoreP1, scoreP2, winP1, winP2 } = req.body;

  p1Id = parseInt(p1Id);
  p2Id = parseInt(p2Id);
  scoreP1 = parseInt(scoreP1);
  scoreP2 = parseInt(scoreP2);
  winP1 = Boolean(winP1);
  winP2 = Boolean(winP2);

  const match = { p1Id, p2Id, scoreP1, scoreP2, winP1, winP2 };

     knex('matches')
      .insert(decamelizeKeys(match), '*')
      .then((rows) => {
        const insertMatch = camelizeKeys(rows[0]);

        res.send(insertMatch);
      })
      .catch((err) => {
        next(err);
      });
});

router.delete('/api/matches', (req, res, next) => {
  let match;
  const  { matchId } = req.body;

  knex('matches')
   .where('id', matchId)
   .first()
   .then((row) => {
     if (!row) return next(boom.create(404, 'Match not found'));

      match = camelizeKeys(row);

     return knex('matches')
        .where('id', matchId)
        .del();
    })
    .then(() => {
      delete match.id;
      const jsonmatch = camelizeKeys(match);
      //
      res.clearCookie('matches');
      res.send(match.id);
    })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;
