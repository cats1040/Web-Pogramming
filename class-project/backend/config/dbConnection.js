import mongoose from "mongoose";
/**
 * one mongoose instance created and the same
 * instance is used in the whole runtime environment.
 * (like singleton pattern)
 */

/**
 * wait for connection - Good practice
 */
try {
  await mongoose.connect("mongodb://127.0.0.1:27017/classdb1", {});
  // var dbConnection = mongoose.connection; // database instance
  // console.log("dbConnection: ", dbConnection);
  console.log("Connected to MongoDB successfully");
} catch (error) {
  console.error("Error connecting to MongoDB", error);
}

// sample mongoose commands
mongoose.Schema;
mongoose.Schema; // NOT NECESSARY - just to avoid linter errors
// model - defines collection structure
