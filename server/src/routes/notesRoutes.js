// const Router = require("express").Router();
// const {getAllNotes, createNotes, updateNotes, deleteNotes} =
//   require("../controllers/notesControllers.js").default
import {Router} from "express";
import {getNote, getAllNotes, createNotes, updateNotes, deleteNotes} from "../controllers/notesControllers.js";
const router = Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;


//mongodb+srv://<db_username>:pe4kdRYg7t7EI4mh@cluster0.kxysz3c.mongodb.net/?appName=Cluster0

