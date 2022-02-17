const express = require("express");
//prettier-ignore
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", auth, getMe);

module.exports = router;
