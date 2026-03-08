const express = require("express");
const { addNote, getAllNotes, removeNote, editNote, getSingleNote } = require("../controllers/noteController");

const router = express.Router();
const Note = require("../models/noteModel");


router.post("/add-note", addNote);
router.get("/notes", getAllNotes);

router.get("/notes/search", async (req, res) => {
  try {
    const q = req.query.q;

    const notes = await Note.find({
      title: { $regex: q, $options: "i" }
    });

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/notes/:id", removeNote);
router.put("/notes/:id", editNote);
router.get("/notes/:id", getSingleNote);

module.exports = router;