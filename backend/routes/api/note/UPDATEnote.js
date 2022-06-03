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
  const notetitle = req.body.id;
  const notedata = req.body.inputList;
  const id = req.body.noteid;
  const note = await db.Note.findByPk(id);
  if (!note) {
    return res.json({ Error: `No Title` });
  }
  note.notedata = notedata;
  note.title = notetitle;
  await note.save();
  res.json(note);
});

module.exports = router;
