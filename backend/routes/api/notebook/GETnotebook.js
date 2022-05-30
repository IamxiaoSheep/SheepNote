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

router.get(
  "/profile/notebook",
  requireAuth,
  asyncHandler(async (req, res) => {
    const userId = Number(req.user.dataValues.id);
    const notebooks = await db.NoteBook.findAll({
      where: { userId },
    });
    res.json(notebooks);
  })
);

module.exports = router;
