const Sequelize = require('sequelize')
const dbConfig = require('../config/Database')

const connection = new Sequelize(dbConfig)

module.exports = connection