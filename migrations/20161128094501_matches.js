'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('matches', (table) => {
    table.increments();

    table.integer('p1_id')
      .notNullable()
      .references('id')
      .inTable('players')
      .onDelete('CASCADE');

    table.integer('p2_id')
      .notNullable()
      .references('id')
      .inTable('players')
      .onDelete('CASCADE');

    table.integer('score_p1')
      .notNullable();

    table.integer('score_p2')
      .notNullable();

    table.bool('win_p1')
      .defaultTo(false)
      .notNullable();

    table.bool('win_p2')
      .defaultTo(false)
      .notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('matches');
};
