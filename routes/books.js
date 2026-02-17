const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

/* Helper Functions */
function getBooks() {
  const filePath = path.join(__dirname, "../data/books.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveBooks(books) {
  const filePath = path.join(__dirname, "../data/books.json");
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

/* GET ALL BOOKS */
router.get("/", (req, res) => {
  const books = getBooks();
  res.json({ success: true, data: books });
});

/* GET BOOK BY ID */
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const books = getBooks();

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  res.json({ success: true, data: book });
});

/* CREATE BOOK */
router.post("/", (req, res) => {
  const books = getBooks();

  const id = books.length > 0
    ? books[books.length - 1].id + 1
    : 1;

  const newBook = { id, ...req.body };

  books.push(newBook);
  saveBooks(books);

  res.status(201).json({ success: true, data: newBook });
});

/* UPDATE BOOK */
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const books = getBooks();

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  books[index] = { ...books[index], ...req.body };
  saveBooks(books);

  res.json({ success: true, data: books[index] });
});

/* DELETE BOOK */
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const books = getBooks();

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  const deletedBook = books[index];
  books.splice(index, 1);
  saveBooks(books);

  res.json({ success: true, data: deletedBook });
});

module.exports = router;
