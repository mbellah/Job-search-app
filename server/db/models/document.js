const db = require('../index.js');
const Sequelize = require('sequelize');

const Document = db.define('document', {
  documentType: {
    type: Sequelize.ENUM('resume', 'coverLetter', 'writingSample', 'portfolio', 'other'),
  },
  documentStatus: {
    type: Sequelize.ENUM('To Do', 'In Progress', 'Completed'),
    defaultValue: 'To Do'
  },
  documentNotes: {
    type: Sequelize.TEXT,
  }
})

module.exports = Document;
