import express from "express";
import registeredUser, {
  getUsers,
} from "../controller/registrationController.js";
import { addProducts, getProducts } from "../controller/productController.js";

const route = express.Router();

route.post("/register", registeredUser);
route.get("/register", getUsers);
route.post("/products", addProducts);
route.get("/products", getProducts);

export default route;
