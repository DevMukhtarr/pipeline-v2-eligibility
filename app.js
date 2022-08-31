import express from "express";
import cors from "cors"
import controllerRoute from "./routes/route.js";
const app = express()

app.use(controllerRoute)
app.use(
  express.urlencoded({
    extended: false,
    })
  );
app.use(express.json());
app.use(cors())
  
export default app