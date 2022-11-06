const express = require("Express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    required: true,
    trim: true,
  },

  size: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
  },
  groups: [
    {
      type: String,
    },
  ],
  users: [
    {
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
      },
      userName: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        trim: true,
      },
      groups: [
        {
          type: String,
        },
      ],
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
