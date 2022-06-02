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
  const notebook = await db.NoteBook.findByPk(notebookId);
  const notes = await db.Note.findAll({ where: { notebookId } });
  const tagXnotes = await db.TagCrossNote.findAll({
    where: { noteId: notebookId },
  });

  // console.log(tagXnotes, `this the cross table`);
  for (let i = 0; i < tagXnotes.length; i++) {
    let currentTXN = tagXnotes[i];
    await db.TagCrossNote.destroy({ where: { tagId: currentTXN.tagId } });
    const tags = await db.Tag.findByPk(currentTXN.tagId);
    await tags.destroy();
  }

  //   console.log(`Does it come out here?
  // `);

  for (let i = 0; i < notes.length; i++) {
    let currentNote = notes[i];
    await currentNote.destroy();
    console.log(currentNote, `THE CURRENT NOTE`);
  }

  await notebook.destroy();
  return res.json(notebookId);
});

module.exports = router;
