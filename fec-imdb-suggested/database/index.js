const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://mongo:27017/test",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to database!");
});

module.exports.db = db;

