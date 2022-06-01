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

// router.post(
//   "/sandbag",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const { userId, notetitle } = req.body;
//     console.log(userId, notetitle);
//     const notebook = await db.Notebook.create({
//       notetitle,
//       userId,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });
//     console.log(`Continue =====`);
//     return res.json(notebook);
//   })
// );

router.post("/sandbag", async (req, res) => {
  console.log(req.body);
  // const notebook = await db.NoteBook.create({ userId: 1, notetitle: "sup" });
  // console.log(notebook);
  res.send({ hello: "Hello" });
});

module.exports = router;
