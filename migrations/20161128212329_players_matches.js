'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('players_matches', (table) => {
    table.increments();

    table.integer('players_id');

    table.integer('matches_id');

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('players_matches');
};

// CREATE TABLE actors_movies (
//   id serial PRIMARY KEY,
//   actor_id integer NOT NULL REFERENCES actors ON DELETE CASCADE,
//   movie_id integer NOT NULL REFERENCES movies ON DELETE CASCADE,
//   role text
// );

// knex('movies') //joining on the movies table
//   .innerJoin('actors_movies', 'movies.id', 'actor_movies.movie_id')
//   .innerJoin('actors', 'actors.id', 'actor_movies.actor_id')
//   .select('title', 'role', 'name')
//   .orderBy('birthed_at', 'DESC')
//   .where('title', 'Pulp Fiction')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });
