"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TagCrossNotes",
      [
        { noteId: 1, tagId: 1 },
        { noteId: 2, tagId: 1 },
        { noteId: 3, tagId: 1 },
        { noteId: 3, tagId: 2 },
        { noteId: 3, tagId: 3 },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TagCrossNotes", null, {});
  },
};
