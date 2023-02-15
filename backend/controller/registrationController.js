import User from "../model/registration.js";
import { upload } from "../utils/uploads.js"
const registeredUser = async (req, res) => {
  try {
    // const user = new User(req.body);
   await upload.single('image')(req, res, function (err) {
      if (err) {
        return res.status(400).send(`Error in registeredUser: ${err.message}`);
      }

      // Create new User instance and set file path in model
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        image: req.file.filename
      });

      const savedUser = user.save();
      res.status(200).send(savedUser);
    });

  } catch (error) {
    res.status(500).send(`Error in registeredUser: ${error.message} => req is ${req.body.email}`);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(`Error in getUsers: ${error.message}`);
  }
};

export { registeredUser, getUsers };
