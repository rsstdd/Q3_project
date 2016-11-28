'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments();

    table.string('email')
         .notNullable()
         .unique();

    table.specificType('hashed_password', 'char(60)')
         .notNullable();

    table.string('first_name')
         .notNullable();

    table.string('last_name')
         .notNullable();

    table.integer('age')
         .nullable()
         .defaultTo(0);

    table.string('country')
         .notNullable();

    table.string('bio');

    table.text('img_url')
         .notNullable()
         .defaultTo('');

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('players');
};
