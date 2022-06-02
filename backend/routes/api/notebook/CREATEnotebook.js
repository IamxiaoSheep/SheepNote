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

router.post("/profile/notebook", async (req, res) => {
  const { id, titleName } = req.body;

  const notebook = await db.NoteBook.create({
    userId: id,
    notetitle: titleName,
  });
  res.json(notebook);
});

module.exports = router;
