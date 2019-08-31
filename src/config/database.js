const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

//knex('users').insert({
//    name: 'Lucio',
//    email: 'lucio@flysys.com.br',
//    password: 'lucio'
//}).then(data => console.log(data))

knex('users').then(result => console.log(result))

