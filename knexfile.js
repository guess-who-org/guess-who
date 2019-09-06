module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/guessWhoDb.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
  // For foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
  "jest": {
    "testEnvirnoment": "node"
  },
  test: "jest --watch --verbose",
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/guessWhoTest.db3',
    },
    useNullAsDefault: true,
  }
};
