//create an http server
import express from "express";
import { router } from "./routes/v1/index.js";

const app = express();

app.use("/api/v1", router) //anytime request comes to this path- go to this router.

app.listen(process.env.PORT || 3000);