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

const updateUser = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const user = await User.findById(_id);

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    return res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error Updating");
  }
};

const createMeeting = async (req, res, next) => {
  res.send();
};

const login = async (req, res, next) => {
  res.send();
};

module.exports = { getUserData, postUserData, updateUser };
