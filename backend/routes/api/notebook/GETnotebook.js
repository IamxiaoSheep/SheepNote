const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../../utils/auth");
const db = require("../../../db/models");

router.get(
  "/profile/notebook",
  asyncHandler(async (req, res) => {
    const notebooks = await db.Note.findAll({});
    res.json(notebooks);
  })
);

module.exports = router;
