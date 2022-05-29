"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      information: DataTypes.TEXT,
      notebookId: DataTypes.INTEGER,
    },
    {}
  );
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.NoteBook, { foreignKey: "notebookId" });
    Note.belongsToMany(models.Tag, {
      through: "TagCrossNote",
      otherKey: "tagId",
      foreignKey: "noteId",
    });
  };
  return Note;
};
