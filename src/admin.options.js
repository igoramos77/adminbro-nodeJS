const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require('./companies/company.entity');
const { Question } = require('./questions/question.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    {
      resource: Company,
      options: {},
    },
    {
      resource: Question,
      options: {
        properties: {
          enunciado: { type: 'richtext' },
          created_at: {
            isVisible: { create: false, list: false, edit: false, filter: true, show: true, },
          }
        }
      },
    },
  ]
};

module.exports = options;
