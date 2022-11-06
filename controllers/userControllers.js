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
    const token = await user.generateAuthToken();
    await user.save();
    return res.json(user, {}, {}, token);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Error");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userName = req.params.userName;
    const updates = Object.keys(req.body);
    const user = await User.findOne({ userName });

    // console.log(user.meetings.personalMeetings[0]);

    // console.log(typeof user._id);

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
  try {
    const user = await User.findByCredentials(
      req.body.userName,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send(user);
  } catch (err) {
    // console.log(e);
    res.status(400).send(err.message);
  }
};

module.exports = { getUserData, postUserData, updateUser, login };
