const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

const createGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw Error("Please add text field.");
  }
  res.status(200).json({ message: "Set Goals" });
};

const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
