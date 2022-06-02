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

router.post("/profile/notebook/:id", async (req, res) => {
  // console.log("Does it go in here");
  const { noteId } = req.body;
  const note = await db.Note.create({
    title: "This is 26 's title",
    notedata: "Created a note",
    notebookId: 26,
  });
  // title: DataTypes.STRING,
  //   notedata: DataTypes.TEXT,
  //   notebookId: DataTypes.INTEGER,
  // console.log(noteId);
  // const notebook = await db.NoteBook.create({
  //   userId: id,
  //   notetitle: titleName,
  // });
  // res.json(notebook);
  res.send("hello");
});

module.exports = router;
