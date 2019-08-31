module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user:     'root',
    password: 'lucio'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
