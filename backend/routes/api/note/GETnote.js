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

router.get("/profile/notebook/:id", requireAuth, async (req, res) => {
  const noteId = req.params.id;
  const notebook = await db.NoteBook.findByPk(noteId);
  if (notebook === null) {
    return res.json({ Error: `wtf mate it doesn't exist` });
  }
  const note = await db.Note.findAll({ where: { notebookId: noteId } });

  res.json(note);
});

module.exports = router;
