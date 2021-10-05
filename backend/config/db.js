const mongoose = require("mongoose");
PORT = 5000
MONGO_URI = "mongodb+srv://dbuser:dbuser@cluster0.hivr0.mongodb.net/shop?retryWrites=true&w=majority";


const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
