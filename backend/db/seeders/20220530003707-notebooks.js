"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "NoteBooks",
      [
        {
          notetitle: "Block A",
          userId: 1,
        },
        {
          notetitle: "Block B",
          userId: 2,
        },
        {
          notetitle: "Block C",
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
