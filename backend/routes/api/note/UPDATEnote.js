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

router.put("/profile/notebook/:noteId", requireAuth, async (req, res) => {
  console.log(req.body, `****** Line 25`);
  const noteId = req.body.noteid;
  const noteTop = req.body.id;
  const notebottom = req.body.inputList;
  const note = await db.Note.findByPk(noteId);
  if (!note) {
    return res.json({ Error: `No Title` });
  }
  note.notedata = notebottom;
  note.title = noteTop;
  await note.save();
  res.json(note);
});

module.exports = router;
