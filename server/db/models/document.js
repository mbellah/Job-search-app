const db = require('../index.js');
const Sequelize = require('sequelize');

const Document = db.define('document', {
  resumeStatus: {
    type: Sequelize.ENUM('To Do', 'In Progress', 'Completed', 'N/A'),
    defaultValue: 'To Do'
  },
  resumeNotes: {
    type: Sequelize.TEXT
  },
  coverLetterStatus: {
    type: Sequelize.ENUM('To Do', 'In Progress', 'Completed', 'N/A'),
    defaultValue: 'To Do'
  },
  coverLetterNotes: {
    type: Sequelize.TEXT
  },
  writingSampleStatus: {
    type: Sequelize.ENUM('To Do', 'In Progress', 'Completed', 'N/A'),
    defaultValue: 'N/A'
  },
  writingSampleNotes: {
    type: Sequelize.TEXT
  },
})

module.exports = Document;
