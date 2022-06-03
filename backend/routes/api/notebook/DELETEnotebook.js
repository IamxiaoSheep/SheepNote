const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../../utils/auth");
const db = require("../../../db/models");
const note = require("../../../db/models/note");

router.delete("/profile/notebook", async (req, res) => {
  const notebookId = req.body.id;

  if (notebookId === 0) {
    return res.send({ length: 0 });
  }
  const notebook = await db.NoteBook.findByPk(notebookId);
  const notes = await db.Note.findAll({ where: { notebookId } });

  if (!notebook || !notes) {
    return res.send({ length: 0 });
  }
  // const tagXnotes = await db.TagCrossNote.findAll({
  //   where: { noteId: notebookId },
  // });

  // for (let i = 0; i < tagXnotes.length; i++) {
  //   let currentTXN = tagXnotes[i];
  //   await db.TagCrossNote.destroy({ where: { tagId: currentTXN.tagId } });
  //   const tags = await db.Tag.findByPk(currentTXN.tagId);
  //   await tags.destroy();
  // }

  for (let i = 0; i < notes.length; i++) {
    let currentNote = notes[i];
    await currentNote.destroy();
  }

  await notebook.destroy();
  return res.json(notebookId);
});

module.exports = router;
