import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/orders";
import { jwtStrategy } from './config/passport';
import apiErrorHandler from "./middlewares/apiErrorHandler";


const app = Express();

app.use(cors());
app.use (Express.json());
app.use (passport.initialize());
passport.use(jwtStrategy);

app.use ("/products", productRouter);
app.use("/users", userRouter);
app.use ("/orders", orderRouter);

app.use (apiErrorHandler);

export default app;