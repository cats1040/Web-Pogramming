import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// creating model
const UserModel = mongoose.model("Users", userSchema);

UserModel.createNewUser = async function (
  newUser,
  successCallback,
  errorCallback
) {
  try {
    const password = newUser.password;

    const encryptedpassword = bcrypt.hashSync(password, 10);

    // never modify the og req.body - passed by ref so
    // req.body.password will be affected

    newUser.password = encryptedpassword;

    const createdUser = await UserModel.insertOne({
      ...newUser,
      password: encryptedpassword,
    });

    console.log("Created user: ", createdUser);
    successCallback(createdUser);
  } catch (error) {
    console.error("Error creating user: ", error?.message);
    errorCallback(error);
  }
};

UserModel.signin = async function (
  email,
  password,
  successCallback,
  errorCallback
) {
  try {
    const dbRes = await UsersModel.findOne({ email: email });
    console.log("DB Response for user: ", dbRes);

    if (!dbRes) {
      errorCallback({ message: "User does not exists" });
      return;
    }

    const isPasswordMatch = bcrypt.compareSync(password, dbRes.password);

    if (!isPasswordMatch) {
      errorCallback({ message: "Invalid credentials" });
      return;
    }

    const jwtToken = jwt.signin(
      { id: dbRes._id, email: dbRes.email },
      "secretKey",
      {
        expiresIn: "1h",
      }
    );

    successCallback({ message: "Sign in success", dbRes, jwtToken });
  } catch (error) {
    console.error("Error signing in: ", error?.message);
    errorCallback(error);
  }
};

export default UserModel;
