import express from "express";
import * as path from 'path';
import * as fs from 'fs';
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import bodyParser from "body-parser";
import { router as placesRouters } from "./routes/places-route.js";
import { router as usersRoutes } from "./routes/users-route.js";
import HttpError from "./models/http-error.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8000;
const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;
const nameDB = process.env.DB_NAME;

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRouters);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this Route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => console.log(err));
  }
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://${userDB}:${passwordDB}@${nameDB}.reaw3ux.mongodb.net/Refresher`
  )
  .then(() =>
    app.listen(port, () => console.log(`Server is running at port: ${port}`))
  )
  .catch((err) => console.log(err));
