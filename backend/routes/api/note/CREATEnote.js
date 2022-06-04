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

router.post("/profile/notebook/:id", requireAuth, async (req, res) => {
  const { titleName, titleData, noteId } = req.body;
  if (titleName.length === 0) {
    return res.json({ Error: `No Title` });
  }
  const findNote = await db.NoteBook.findByPk(noteId);
  if (findNote === null) {
    return false;
  }
  const note = await db.Note.create({
    title: titleName,
    notedata: titleData,
    notebookId: noteId,
  });
  res.json(note);
});

module.exports = router;
