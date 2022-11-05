const express = require("express");
const companyControllers = require("../controllers/companyControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/company", auth, companyControllers.getCompanyData);
router.post("/company", auth, companyControllers.postCompanyData);
router.patch("/company/:id", auth, companyControllers.updateCompany);

module.exports = router;
