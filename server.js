const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/productRoute")

// const bodyParser = require("body-parser");


// ROUTES
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute)

// PARSE
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
