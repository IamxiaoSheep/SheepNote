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

router.delete("/profile/notebook", async (req, res) => {
  const notebookId = req.body.id;
  const notebook = await db.NoteBook.findByPk(notebookId);
  await notebook.destroy();
  return res.json(notebookId);
});

module.exports = router;
