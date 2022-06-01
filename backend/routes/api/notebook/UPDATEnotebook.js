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
  const notebook = await db.NoteBook.findByPk(notebookId);
  notebook.notetitle = newInfo;
  await notebook.save();
  return res.json(notebook);
});

module.exports = router;
