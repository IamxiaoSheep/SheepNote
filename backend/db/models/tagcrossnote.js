"use strict";
module.exports = (sequelize, DataTypes) => {
  const TagCrossNote = sequelize.define(
    "TagCrossNote",
    {
      tagId: DataTypes.INTEGER,
      noteId: DataTypes.INTEGER,
    },
    {}
  );
  TagCrossNote.associate = function (models) {};
  return TagCrossNote;
};
