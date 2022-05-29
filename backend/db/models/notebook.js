"use strict";
module.exports = (sequelize, DataTypes) => {
  const NoteBook = sequelize.define(
    "NoteBook",
    {
      titlebook: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  NoteBook.associate = function (models) {
    // associations can be defined here
    NoteBook.belongsTo(models.User, { foreignKey: "userId" });
    NoteBook.hasMany(models.Note, { foreignKey: "notebookId" });
  };
  return NoteBook;
};
