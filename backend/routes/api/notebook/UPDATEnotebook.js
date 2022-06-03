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

router.put("/profile/notebook", async (req, res) => {
  const notebookId = req.body.id;
  const newInfo = req.body.input;

  if (newInfo.length === 0 || notebookId === 0) {
    return res.json({ length: 0 });
  }

  const notebook = await db.NoteBook.findByPk(notebookId);

  if (!notebook) {
    return res.json({ length: 0 });
  }
  if (notebook.notetitle === newInfo || newInfo instanceof Array) {
    return res.json({ length: 0 });
  }
  notebook.notetitle = newInfo;

  await notebook.save();

  return res.json(notebook);
});

module.exports = router;
