import cors from "cors";
import express from "express";
import { login_required } from "./middlewares/login_required.js";
import { userRouter } from "./routers/userRouter.js";
import { worldRouter } from "./routers/worldRouter.js";
import { mainRouter } from "./routers/mainRouter.js";
import { detailRouter } from "./routers/detailRouter.js";
import { myPageRouter } from "./routers/myPageRouter.js";

const app = express();

// solve CORS error
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers here
// app.use(userRouter);

export { app };
