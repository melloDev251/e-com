const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

// ROUTES
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// PARSE
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// CORS
const cors = require("cors");
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: false, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// COOKIE
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
