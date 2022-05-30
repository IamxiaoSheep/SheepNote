"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "Block A Title",
          notedata: "This is where Block A information will live",
          notebookId: 1,
        },
        {
          title: "Block B Title",
          notedata: "This is where Block B information will live",
          notebookId: 2,
        },
        {
          title: "Block C Title",
          notedata: "This is where Block C information will live",
          notebookId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
