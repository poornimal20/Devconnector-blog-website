const mongoose = require('mongoose');
//const config = require('config');
//const db = "mongodb+srv://rokeshrk:vOYkw9HsWCNxj1I9@cluster0.ynacqbs.mongodb.net/?retryWrites=true&w=majority";
 const db = "mongodb://127.0.0.1:27017/devconnector123";

// The use of async indicates that this function can use await to handle promises.

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,//false: Setting it to false ensures that the newer and more efficient methods provided by the MongoDB driver are used. This is often recommended because the findAndModify command has been deprecated, and using the individual methods is the preferred approach.
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("error is here");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;