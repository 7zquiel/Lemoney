//#01
module.exports = {
 local: {
  username: 'postgres',
  password: 'root',
  database: 'lemoney',
  host: 'localhost',
  dialect: 'postgres'
  },
 development: {
  username: 'postgres',
  password: 'root',
  database: 'lemoney',
  host: 'localhost',
  dialect: 'postgres'
  },
  test: {
  username: 'postgres',
  password: 'root',
  database: 'database_test',
  host: 'localhost',
  dialect: 'postgres'
 },
 production: {
  username: 'postgres',
  password: 'root',
  database: 'database',
  host: 'localhost',
  dialect: 'postgres'
 }
}

//#02
// module.exports = {
//     dialect: 'postgres',
//     host: 'localhost',
//     username: 'postgres',
//     password: 'root',
//     database: 'lemoney',
//     define: {
//         timestamps: true,
//         undercored: true
//     }
// }

//#03
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('lemoney', 'postgres', 'root', {
//     host: 'localhost',
//     dialect: 'postgres'
// })