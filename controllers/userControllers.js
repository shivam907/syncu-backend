const User = require("../models/User");

const getUserData = (req, res, next) => {
  res.json({
    user: ["shivam", "cez", "creative", "expertz"],
    message: "hello duniya aaleo kive hoo kaim bade fuddu oo tuc",
  });
};

const postUserData = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUserData, postUserData };
