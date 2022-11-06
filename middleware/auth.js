const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, "cezisbest");
  // console.log(decoded);
  const user = User.findOne({ _id: decoded, token: token });
  // console.log("In the middleware");

  req.token = token;
  req.user = user;
  next();
};

module.exports = auth;
