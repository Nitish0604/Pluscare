const express = require("express");
const app = express();
const cors = require("cors");
const Razorpay = require("razorpay")

require("dotenv").config();
const PORT = process.env.PORT || 5000; // Use a default port if PORT is not specified in the environment
const { dbconnect } = require("./config/database");

const childcare = require("./routes/childcare");
const razorpay = new Razorpay({
  key_id: "rzp_test_j3uMC3pJNVXJpR",
  key_secret: "iVdd7vf9Qopo1TKflmLWF8Ue",
});

// Connect to the database
dbconnect();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(
  cors("*")
)

// Mount the childcare route
app.use("/api/PlusCare/Home/", childcare);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
