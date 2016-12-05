'use strict';

const express = require('express');
const knex = require('../knex');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

router.get('/matches', (req, res, next) => {
  knex('matches')
    .distinct('matches.id as match_id')
    .select('p1.first_name as p1_first_name', 'p1.last_name as p1_last_name', 'p1.country as p1_country', 'p1.img_url as p1_img')
    .select('p2.first_name as p2_first_name', 'p2.last_name as  p2_last_name', 'p2.country as p2_country', 'p2.img_url as p2_img')
    .select('matches.p1_id', 'matches.p2_id', 'matches.score_p1', 'matches.score_p2', 'matches.win_p1', 'matches.win_p2')
    .innerJoin('players as p1', 'p1.id', 'matches.p1_id')
    .innerJoin('players as p2', 'p2.id', 'matches.p2_id')
    .orderBy('match_id', 'DESC')
    .then((rows) => {
      const matches = camelizeKeys(rows);

      res.send(matches);
    })
    .catch((err) => {
      next(err);
    });
});

//authorize,
router.get(`/matches/:id`, (req, res, next) => {
  // Gets the specific matches that include the player id
  console.log('####### GET MATCHES/ID ########');
  const playerId  = Number.parseInt(req.params.id);

  // if (Number.isNaN(playerId)) {
  //   return next();
  // }

  knex('matches')
    .distinct('matches.id as match_id')
    .select('matches.p1_id', 'matches.p2_id', 'matches.score_p1', 'matches.score_p2', 'matches.win_p1', 'matches.win_p2')
    .select('p1.first_name as p1_first_name', 'p1.last_name as p1_last_name', 'p1.country as p1_country', 'p1.img_url as p1_img', 'p1.age as p1_age', 'p1.bio as p1_bio')
    .select('p2.first_name as p2_first_name', 'p2.last_name as  p2_last_name', 'p2.country as p2_country', 'p2.img_url as p2_img', 'p2.age as p2_age', 'p2.bio as p2_bio')
    .innerJoin('players as p1', 'p1.id', 'matches.p1_id')
    .innerJoin('players as p2', 'p2.id', 'matches.p2_id')
    .where('matches.p1_id', playerId)
    .orWhere('matches.p2_id', playerId)
    .orderBy('match_id', 'DESC')
    .then((rows) => {
      const matches = camelizeKeys(rows);

      res.send(matches);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/matches/', authorize, (req, res, next) => {
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

router.delete('/matches', authorize, (req, res, next) => {
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

      res.send(match);
    })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;
