import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error creating password hash" });
      }

      const createdUser = await User.create({
        username,
        email,
        password: hash,
      });
      res
        .status(200)
        .json({ message: "User created successfully", user: {
          username: createdUser.username,
          email: createdUser.email,
          id: createdUser._id,

          }
         });

    });
  } catch (error) {
    res.status(500).json(`Error craeting user: ${error.message}`);
  }
};

////////////////////////////// Login controller funtion ////////////////////////////////

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ message: "User not found" });
    else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return res.status(500).json({ message: err.message });
        } else if (!result) {
          return res.status(404).json({ message: "Password don't match" });
        }

        res.status(200).json({ message: "Login successful" ,user:{
          _id: user._id, 
          username: user.username,
          email: user.email,
        }});
      });
    }
  } catch (error) {
    res.status(500).json(`Error logging in user: ${error.message}`);
  }
};
