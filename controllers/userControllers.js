const User = require("../models/User");

const getUserData = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(402).send("ERROR");
  }
};

const postUserData = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Error");
  }
};

module.exports = { getUserData, postUserData };
