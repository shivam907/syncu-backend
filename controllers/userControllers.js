const getUserData = (req, res, next) => {
  res.json({
    user: ["shivam", "cez", "creative", "expertz"],
    message: "hello duniya aaleo kive hoo kaim bade fuddu oo tuc",
  });
};

module.exports = { getUserData };
