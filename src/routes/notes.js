const router = require("express").Router();

const Note = require("../models/Note");

router.get("/notes/add", (req, res) => {
  res.render("notes/new-notes");
});

router.post("/notes/new-note", async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a title" });
  }
  if (!description) {
    errors.push({ text: "Please Write a description" });
  }
  if (errors.length > 0) {
    res.render("notes/new-notes", {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect("/notes");
  }
});

router.get("/notes", async (req, res) => {
  const notes = await Note.find().sort({ date: "desc" }).lean();
  res.render("notes/all-notes", { notes });
});

router.get("/notes/edit/:id", async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("notes/edit-note", { note });
});

router.put("/notes/edit-note/:id", async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  res.redirect("/notes");
});

router.delete("/notes/delete/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
});

module.exports = router;
