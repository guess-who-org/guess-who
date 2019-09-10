
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('username', 256).notNullable().unique();
        table.string('password', 256).notNullable().unique();;
    })
    .createTable('celebs', table => {
        table.increments();
        table.string('name', 256).notNullable().unique();
    })
    .createTable('tweets', table => {
        table.increments();
        table.string('tweet', 256).notNullable();
        table.integer('celeb_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('celebs')
    })
    .createTable('games', table => {
        table.increments();
        table.string('title', 256).notNullable();
        table.integer('points').defaultTo('0');
        table.integer('winner')
        .unsigned()
        .references('id')
        .inTable('users')
    })
    .createTable('games_celebs', table => {
        table.integer('game_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('games')
        table.integer('celeb_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('celebs')
            .notNullable();
        table.primary(['game_id', 'celeb_id']);
    })
    .createTable('games_users', table => {
        table.integer('game_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('games')
        table.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users');
        table.primary(['game_id', 'user_id']);
    })
};
  
exports.down = function(knex, Promise) {
    return (
        knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('celebs')
        .dropTableIfExists('tweets')
        .dropTableIfExists('games')
        .dropTableIfExists('games_celebs')
        .dropTableIfExists('games_users')
    );
};
  