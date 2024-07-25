/**
 * Defines the schema for a listing in the database.
 * 
 * @param {Object} schema - The schema definition object.
 * @param {Object} schema.creator - The creator of the listing.
 * @param {mongoose.Schema.Types.ObjectId} schema.creator.type - The type of the creator field, which is an ObjectId referencing the User model.
 * @param {String} schema.category - The category of the listing.
 * @param {String} schema.type - The type of the listing.
 * @param {String} schema.streetAddress - The street address of the listing.
 * @param {String} schema.aptSuite - The apartment or suite number of the listing.
 * @param {String} schema.city - The city where the listing is located.
 * @param {String} schema.province - The province where the listing is located.
 * @param {String} schema.country - The country where the listing is located.
 * @param {Number} schema.guestCount - The number of guests the listing can accommodate.
 * @param {Number} schema.bedroomCount - The number of bedrooms in the listing.
 * @param {Number} schema.bedCount - The number of beds in the listing.
 * @param {Number} schema.bathroomCount - The number of bathrooms in the listing.
 * @param {Array} schema.amenities - The amenities available in the listing.
 * @param {Array} schema.listingPhotoPaths - The photo URLs of the listing.
 * @param {String} schema.title - The title of the listing.
 * @param {String} schema.description - The description of the listing.
 * @param {String} schema.highlight - The highlight of the listing.
 * @param {String} schema.highlightDesc - The description of the highlight.
 * @param {Number} schema.price - The price of the listing.
 * @param {Object} options - The schema options object.
 * @param {Boolean} options.timestamps - Whether to add createdAt and updatedAt timestamps to the schema.
 * 
 * @returns {mongoose.Model} The Listing model.
 */
const mongoose = require("mongoose")

const ListingSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    aptSuite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    bedroomCount: {
      type: Number,
      required: true,
    },
    bedCount: {
      type: Number,
      required: true,
    },
    bathroomCount: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Array,
      default:[]
    },
    listingPhotoPaths: [{ type: String }], // Store photo URLs
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: true
    },
    highlightDesc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true}
)

const Listing = mongoose.model("Listing", ListingSchema )
module.exports = Listing