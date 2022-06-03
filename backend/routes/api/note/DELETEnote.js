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

router.delete("/profile/notebook/:noteId", requireAuth, async (req, res) => {
  const { id } = req.body;
  if (id === 0) {
    return res.json({ Error: `No Title` });
  }

  const notes = await db.Note.findByPk(id);
  if (!notes) {
    return res.json({ Error: `No Title` });
  }
  await notes.destroy();
  return res.json(id);
});

module.exports = router;
