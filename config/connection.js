const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/inspo-co", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected 🌍"))

mongoose.set("debug", true)

module.exports = mongoose.connection
