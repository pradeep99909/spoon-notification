require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(process.env.PORT, () => {
  console.log("App is Listening on port", process.env.PORT);
});
