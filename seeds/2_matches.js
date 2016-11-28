'use strict';

exports.seed = function(knex) {
  return knex('matches').del()
    .then(() => {
      return knex('matches').insert([{
        id: 1,
        p1_id: 1,
        p2_id: 2,
        score_p1: 21,
        score_p2: 10,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('matches_id_seq', (SELECT MAX(id) FROM players));"
    );
  });
};
