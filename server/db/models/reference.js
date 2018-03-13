const db = require('../index.js');
const Sequelize = require('sequelize');

const Reference = db.define('reference', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('To Contact', 'Awaiting Response', 'Confirmed', 'Unable'),
    defaultValue: 'To Contact'
  }
})

module.exports = Reference;

