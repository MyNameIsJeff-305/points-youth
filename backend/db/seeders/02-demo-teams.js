'use strict';

const { Team } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Team.bulkCreate([
        {
          name: "Fenix",
          description: "El Resplandor de Oriente",
          color: "#b40f01",
          logoUrl: "https://mybnbbucket.s3.us-east-2.amazonaws.com/FENIX.png",
          score: 0
        },
        {
          name: "Grifo",
          description: "El Guardián de los Tesoros",
          color: "#d49710",
          logoUrl: "https://mybnbbucket.s3.us-east-2.amazonaws.com/GRIFO.png",
          score: 0
        },
        {
          name: "Leviatan",
          description: "El Despertar de las Profundidades",
          color: "#125185",
          logoUrl: "https://mybnbbucket.s3.us-east-2.amazonaws.com/LEVIATAN.png",
          score: 0
        },
        {
          name: "Pegasus",
          description: "El Aliento de los Vientos",
          color: "#595857",
          logoUrl: "https://mybnbbucket.s3.us-east-2.amazonaws.com/PEGASUS.png",
          score: 0
        }
      ], options);
    } catch (error) {
      console.error("❌ Seeder Error:", error);
      throw error;
    }
  },


  async down (queryInterface, Sequelize) {
    options.tableName = 'Teams';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'] }
    }, {});
  }
};
