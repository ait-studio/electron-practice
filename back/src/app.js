import cors from "cors";
import express from "express";

const app = express();

// solve CORS error
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers here
// app.use(userRouter);

export { app };
