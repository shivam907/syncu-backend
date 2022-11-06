const express = require("express");
const userControllers = require("../controllers/userControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/users", auth, userControllers.getUserData);
router.post("/users", auth, userControllers.postUserData);
router.post("/login", auth, userControllers.login);
router.patch("/users/:id", auth, userControllers.updateUser);

module.exports = router;
