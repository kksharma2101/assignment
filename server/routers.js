import express from "express";
import {
  deleteData,
  getAllData,
  getSingleData,
  saveData,
  updateData,
} from "./controllers.js";

const router = express.Router();

router.post("/add", saveData);
router.get("/get-data", getAllData);
router.get("/single-data/:id", getSingleData);
router.put("/update-data/:id", updateData);
router.delete("/delete-data/:id", deleteData);

export default router;
