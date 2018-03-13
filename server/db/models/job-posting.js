const db = require('../index.js');
const Sequelize = require('sequelize');

const JobPosting = db.define('job-posting', {
  positionName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  company: {
    type: Sequelize.STRING
  },
  postingDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  postingUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  dueDate: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.ENUM('To Begin', 'In Progress', 'Completed', 'Inactive'),
    defaultValue: 'In Progress'
  },
  jobDescription: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.TEXT
  },
  jobTitle: {
    type: Sequelize.VIRTUAL,
      get() {
        return `${this.positionName} at ${this.company}`
      }
  }
})

module.exports = JobPosting;
