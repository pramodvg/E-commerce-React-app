import express from "express";
import registrationRoutes from "./registrationRoutes.js";
import productRoutes from "./productRoutes.js";


const route = express.Router();

route.use("/register", registrationRoutes);
route.use("/products", productRoutes);

export default route;
