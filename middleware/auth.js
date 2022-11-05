const auth = (req, res, next) => {
  console.log("In the middleware");
  next();
};

module.exports = auth;
