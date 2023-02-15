import express from "express";
import { registeredUser, getUsers } from "../controller/registrationController.js";

const router = express.Router();

router.post("/", registeredUser);
router.get("/", getUsers);

export default router;
