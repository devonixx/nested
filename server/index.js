/**
 * This script sets up the server using Express.js and connects to MongoDB using Mongoose.
 * It also includes middleware for handling CORS, JSON parsing, serving static files, and routing.
 *
 * @module server
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

/**
 * Enable Cross-Origin Resource Sharing (CORS) for all requests.
 */
app.use(cors());

/**
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 */
app.use(express.json());

/**
 * Serve static files from the "public" directory.
 */
app.use(express.static("public"));

/* ROUTES */
/**
 * Use the authRoutes middleware for handling authentication-related requests.
 * @type {express.Router}
 */
app.use("/auth", authRoutes)

/**
 * Use the listingRoutes middleware for handling property-related requests.
 * @type {express.Router}
 */
app.use("/properties", listingRoutes)

/**
 * Use the bookingRoutes middleware for handling booking-related requests.
 * @type {express.Router}
 */
app.use("/bookings", bookingRoutes)

/**
 * Use the userRoutes middleware for handling user-related requests.
 * @type {express.Router}
 */
app.use("/users", userRoutes)

/* MONGOOSE SETUP */
/**
 * The port number on which the server will listen.
 * @constant {number}
 */
const PORT = 3001;

/**
 * Connect to MongoDB using Mongoose.
 * If successful, start the server and listen on the specified port.
 * If an error occurs, log the error message.
 */
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Nested",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));