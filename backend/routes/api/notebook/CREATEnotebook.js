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
  console.log(`Step 3`);
  console.log(req.body);
  const { id, titleName } = req.body;
  if (titleName.length === 0) {
    return res.json({ length: 0 });
  }
  const notebook = await db.NoteBook.create({
    userId: id,
    notetitle: titleName,
  });
  res.json(notebook);
});

module.exports = router;
