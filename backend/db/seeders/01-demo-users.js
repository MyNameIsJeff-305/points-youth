'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'alex@user.io',
        username: 'alex',
        hashedPassword: bcrypt.hashSync('AlexPassword')
      },
      {
        email: 'michel@user.io',
        username: 'michel',
        hashedPassword: bcrypt.hashSync('MichelPassw')
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['alex', 'michel', 'screen'] }
    }, {});
  }
};
