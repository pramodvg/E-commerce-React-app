import express from "express";
import { addProducts, getProducts } from "../controller/productController.js";

const router = express.Router();

router.post("/", addProducts);
router.get("/", getProducts);

export default router;
