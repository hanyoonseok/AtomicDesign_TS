const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
