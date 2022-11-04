const express = require("Express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
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
  mobileNumber: {
    type: Number,
    required: true,
    length: 10,
    unique: true,
    trim: true,
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
  meetings: {
    personalMeetings: [
      {
        personalMeetingObjectId: {
          type: String,
        },
      },
    ],
    GroupMeetings: [
      {
        groupMeetingObjectId: {
          type: String,
        },
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
