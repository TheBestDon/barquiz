// @flow

import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import _ from "lodash";
import bcrypt from "bcryptjs";

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      isAsync: true,
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});
/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
UserSchema.pre("save", function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified("password")) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
