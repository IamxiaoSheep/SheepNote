"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        { name: "Block A Tag" },
        { name: "Block B Tag" },
        { name: "Block C Tag" },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
