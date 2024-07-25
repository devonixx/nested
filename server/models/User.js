const mongoose = require("mongoose")

/**
 * Defines the schema for the User model.
 * 
 * @typedef {Object} UserSchema
 * @property {String} firstName - The first name of the user. Required.
 * @property {String} lastName - The last name of the user. Required.
 * @property {String} email - The email address of the user. Required and unique.
 * @property {String} password - The password for the user's account. Required.
 * @property {String} [profileImagePath=""] - The path to the user's profile image. Optional.
 * @property {Array} [tripList=[]] - A list of trips associated with the user. Optional.
 * @property {Array} [wishList=[]] - A list of wishes associated with the user. Optional.
 * @property {Array} [propertyList=[]] - A list of properties associated with the user. Optional.
 * @property {Array} [reservationList=[]] - A list of reservations associated with the user. Optional.
 * @property {Date} createdAt - The date when the user was created. Automatically managed by Mongoose.
 * @property {Date} updatedAt - The date when the user was last updated. Automatically managed by Mongoose.
 */

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImagePath: {
      type: String,
      default: "",
    },
    tripList: {
      type: Array,
      default: [],
    },
    wishList: {
      type: Array,
      default: [],
    },
    propertyList: {
      type: Array,
      default: [],
    },
    reservationList: {
      type: Array,
      default: [],
    }
  },
  { timestamps: true }
)

/**
 * The User model based on the UserSchema.
 * 
 * @returns {mongoose.Model} The User model.
 */
const User = mongoose.model("User", UserSchema)
module.exports = User