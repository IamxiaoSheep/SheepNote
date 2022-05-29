'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagCrossNote = sequelize.define('TagCrossNote', {
    tagId: DataTypes.INTEGER,
    noteId: DataTypes.INTEGER
  }, {});
  TagCrossNote.associate = function(models) {
    // associations can be defined here
  };
  return TagCrossNote;
};