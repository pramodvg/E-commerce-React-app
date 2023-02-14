import User from "../model/registration.js";

const registeredUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) {
      res.status(500).send("Error in registerUser 500 {err}");
    } else {
      res.status(200).send(data);
    }
  });
};

export default registeredUser;

const getUsers = (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.status(500).send(`Error in getUsers 500 ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
};

export { getUsers };
