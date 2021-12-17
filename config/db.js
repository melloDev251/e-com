const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.jcpvc.mongodb.net/e-comm"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("CONNECTION ERRORRRRRRRRRRRRRR ", err));
