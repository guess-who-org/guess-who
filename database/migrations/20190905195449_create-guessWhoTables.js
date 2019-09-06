
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users.string('username', 256).notNullable().unique();
        users.string('password', 256).notNullable().unique();;
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
  