"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      notedata: DataTypes.TEXT,
      notebookId: DataTypes.INTEGER,
    },
    {}
  );
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.NoteBook, { foreignKey: "notebookId" });
  };
  return Note;
};
