const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000; // Use a default port if PORT is not specified in the environment
const { dbconnect } = require("./config/database");

const childcare = require("./routes/childcare");

// Connect to the database
dbconnect();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the childcare route
app.use("/api", childcare);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
