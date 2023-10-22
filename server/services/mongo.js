const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:5z0n6UHAWf2UobMG@clusternasa.k9s4nsw.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
