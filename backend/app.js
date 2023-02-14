import Express from "express";
import cores from "cors";
import registeredUser from "./routes/ecommerceRoutes.js";
const app = Express();

app.use(cores());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use("/", registeredUser);

export default app;
