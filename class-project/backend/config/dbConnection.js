import mongoose from "mongoose";

/**
 * wait for connection - Good practice
 */
try {
  await mongoose.connect("mongodb://127.0.0.1:27017/classdb1", {
    newUrlParser: true,
    useUnifiedTopology: true,
  });
  var dbConnection = mongoose.connection; // database instance
  console.log("dbConnection: ", dbConnection);
} catch (error) {
  console.error("Error connecting to MongoDB", error);
}

// sample mongoose commands
mongoose.Schema;
mongoose.Schema; // NOT NECESSARY - just to avoid linter errors
// model - defines collection structure
