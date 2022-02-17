const express = require("express");
//prettier-ignore
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(auth, getGoals).post(auth, createGoal);

router.route("/:id").put(auth, updateGoal).delete(auth, deleteGoal);

module.exports = router;
