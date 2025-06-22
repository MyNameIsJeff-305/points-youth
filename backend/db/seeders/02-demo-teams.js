'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Teams', [
        {
          name: "Gryffindor",
          description: "Known for bravery and courage, Gryffindor is one of the four houses at Hogwarts School of Witchcraft and Wizardry.",
          logoUrl: "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png",
          score: 100
        },
        {
          name: "Hufflepuff",
          description: "Hufflepuff is known for its members' dedication, hard work, and loyalty. It is one of the four houses at Hogwarts.",
          logoUrl: "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png",
          score: 80
        },
        {
          name: "Ravenclaw",
          description: "Ravenclaw values intelligence, creativity, and wisdom. It is one of the four houses at Hogwarts.",
          logoUrl: "https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png",
          score: 90
        },
        {
          name: "Slytherin",
          description: "Slytherin is known for ambition, cunning, and resourcefulness. It is one of the four houses at Hogwarts.",
          logoUrl: "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png",
          score: 110
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
