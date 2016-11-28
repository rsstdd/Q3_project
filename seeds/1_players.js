'use strict';

exports.seed = function(knex) {
  return knex('players').del()
    .then(() => {
      return knex('players').insert([{
        id: 1,
        email: '2pac@shakur.com',
        hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
        first_name: 'Tupac',
        last_name: 'Shakur',
        age: 45,
        country: 'United States',
        bio: "Tupac Shakur is a hip-hop legend with explicit and controversial lyrics. When he is not embroiled in a feud between East Coast and West Coast rappers, he is here dominating the competiton.",
        img_url: 'some/url.com',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        email: 'richnix@whitehouse.gov',
        hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
        first_name: 'Richard',
        last_name: 'Nixon',
        age: 81,
        country: 'United States',
        bio: "Richard Milhous Nixon was an American politician who served as the 37th President of the United States from 1969 until 1974, when he became the only U.S. president to resign from office. He will not resign from this game.",
        img_url: 'some/url.com',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('players_id_seq', (SELECT MAX(id) FROM players));"
    );
  });
};
