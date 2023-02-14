import express from "express";
import registeredUser, {
  getUsers,
} from "../controller/registrationController.js";

const route = express.Router();

route.post("/register", registeredUser);
route.get("/register", getUsers);

export default route;
