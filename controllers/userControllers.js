const User = require("../models/User");

const nodemailer = require("nodemailer");
const getUserData = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(402).send("ERROR");
  }
};

async function sendMail(email) {
  let transporter = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 587,
    secure: false,
    auth: {
      user: "shivam@syncu.me",
      pass: "Shivam@907",
    },
  });
  let info = await transporter.sendMail({
    from: "shivam@syncu.me",
    to: email,
    subject: "kida ✔",
    text: "Hello duniya?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.Accepted);
}

// main().catch(console.error);

const postUserData = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await sendMail(req.body.email);
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
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    return res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error Updating");
  }
};

const myProfile = (req, res, next) => {
  console.log(req.user);
  if (req.user.userName == req.params.userName) {
    res.send(req.user);
  }
  res.send("Unable to go to Profile");
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

module.exports = { getUserData, postUserData, updateUser, login, myProfile };
