'use strict';

exports.seed = function(knex) {
  return knex('matches').del()
    .then(() => {
      return knex('matches').insert([
        {
          id: 1,
          p1_id: 1,
          p2_id: 2,
          score_p1: 21,
          score_p2: 10,
          win_p1: true,
          win_p2: false,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        },
        {
          id: 2,
          p1_id: 2,
          p2_id: 1,
          score_p1: 20,
          score_p2: 21,
          win_p1: false,
          win_p2: true,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        },
        {
          id: 3,
          p1_id: 1,
          p2_id: 2,
          score_p1: 14,
          score_p2: 21,
          win_p1: false,
          win_p2: true,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        },
        {
          id: 4,
          p1_id: 2,
          p2_id: 1,
          score_p1: 21,
          score_p2: 10,
          win_p1: true,
          win_p2: false,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        },
        {
          id: 5,
          p1_id: 1,
          p2_id: 2,
          score_p1: 21,
          score_p2: 10,
          win_p1: true,
          win_p2: false,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        },
        {
          id: 6,
          p1_id: 1,
          p2_id: 2,
          score_p1: 21,
          score_p2: 10,
          win_p1: true,
          win_p2: false,
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('matches_id_seq', (SELECT MAX(id) FROM players));"
    );
  });
};
