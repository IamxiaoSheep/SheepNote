// const router = require("express").Router();
// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth.js");
// const { User } = require("../../db/models");
// const { restoreUser } = require("../../utils/auth.js");
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );
// module.exports = router;
// // vTbDgRuE - mC3R5K1py17Q7AWgCi_nKo21U54;
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const GETnotebooks = require("./notebook/GETnotebook");
const POSTnotebooks = require("./notebook/CREATEnotebook");
const UPDATEnotbooks = require("./notebook/UPDATEnotebook");
const DELETEnotebooks = require("./notebook/DELETEnotebook");
const POSTnote = require("./note/CREATEnote");
const GETnote = require("./note/GETnote");
const UPDATEnote = require("./note/UPDATEnote");
const DELETEnote = require("./note/DELETEnote");
router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use(GETnotebooks);
router.use(POSTnotebooks);
router.use(UPDATEnotbooks);
router.use(DELETEnotebooks);
router.use(POSTnote);
router.use(GETnote);
router.use(UPDATEnote);
router.use(DELETEnote);

router.get("/test", (req, res) => {
  res.redirect(notebooks);
});

module.exports = router;
