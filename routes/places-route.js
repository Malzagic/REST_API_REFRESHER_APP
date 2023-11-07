import express from "express";
import { check } from "express-validator";
import { checkAuth } from "../middleware/check-auth.js";
import {
  getPlaceByID,
  getPlacesByUserID,
  createPlace,
  updatePlaceByID,
  deletePlaceByID,
} from "../controllers/places-controller.js";
import fileUpload from "../middleware/file-upload.js";

const router = express.Router();

router.get("/:pid", getPlaceByID);

router.get("/user/:uid", getPlacesByUserID);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlaceByID
);

router.delete("/:pid", deletePlaceByID);

export { router };
