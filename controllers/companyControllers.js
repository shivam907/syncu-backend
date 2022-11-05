const Company = require("../models/Company");

const getCompanyData = async (req, res, next) => {
  try {
    const company = await Company.find({});
    res.json(company);
  } catch (err) {
    console.log(err.message);
    res.status(402).send("ERROR");
  }
};

const postCompanyData = async (req, res, next) => {
  try {
    const company = new Company(req.body);
    await company.save();
    return res.json(company);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Error");
  }
};

const updateCompany = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const company = await Company.findById(_id);

    updates.forEach((update) => (company[update] = req.body[update]));
    await company.save();
    return res.send(company);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error Updating");
  }
};

module.exports = { getCompanyData, postCompanyData, updateCompany };
