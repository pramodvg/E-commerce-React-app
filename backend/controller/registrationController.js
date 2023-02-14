import User from "../model/registration.js";

const registeredUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) {
      res.status(500).send("Error in registerUser 500");
    } else {
      res.status(200).send(data);
    }
  });
};

export default registeredUser;

const getUsers = (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.status(500).send("Error in getUsers 500");
    } else {
      res.status(200).send(data);
    }
  });
};

export { getUsers };

// import todoList from "../model/todoList.js";

// const getTodoList = (req, res) => {
//   todoList.find((err, data) => {
//     if (err) {
//       res.status(500).send("Error in gettodolist 500");
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };
// export default getTodoList;
// const name = (req, res) => {
//   res.status(200).send("Hello from Manthan");
// };
// export { name };
