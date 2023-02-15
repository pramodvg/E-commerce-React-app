import User from "../model/registration.js";

const registeredUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(500).send(`Error in registeredUser: ${error.message}`);
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
