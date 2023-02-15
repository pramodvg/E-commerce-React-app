import Express from "express";
import cores from "cors";
import registeredUser from "./routes/ecommerceRoutes.js";
import path from 'path';
const __dirname = path.resolve();
const app = Express();

app.use(cores());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(Express.static(path.join(__dirname, 'public/uploads')));
app.use("/", registeredUser);

export default app;
