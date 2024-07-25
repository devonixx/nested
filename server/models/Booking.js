const mongoose = require("mongoose");

/**
 * Schema definition for Booking.
 * 
 * @typedef {Object} Booking
 * @property {mongoose.Schema.Types.ObjectId} customerId - The ID of the customer making the booking, referencing the User model.
 * @property {mongoose.Schema.Types.ObjectId} hostId - The ID of the host receiving the booking, referencing the User model.
 * @property {mongoose.Schema.Types.ObjectId} listingId - The ID of the listing being booked, referencing the Listing model.
 * @property {String} startDate - The start date of the booking.
 * @property {String} endDate - The end date of the booking.
 * @property {Number} totalPrice - The total price of the booking.
 * @property {Date} createdAt - The date when the booking was created.
 * @property {Date} updatedAt - The date when the booking was last updated.
 */

const BookingSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * Booking model.
 * 
 * @type {mongoose.Model<Booking>}
 */
const Booking = mongoose.model("Booking", BookingSchema)
module.exports = Booking