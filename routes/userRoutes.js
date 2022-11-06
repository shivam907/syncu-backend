const express = require("express");
const userControllers = require("../controllers/userControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/users", auth, userControllers.getUserData);
router.post("/users", userControllers.postUserData);
router.post("/login", auth, userControllers.login);
router.patch("/users/:userName", auth, userControllers.updateUser);

module.exports = router;
