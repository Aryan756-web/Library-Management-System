const express = require("express");

const app = express();
const PORT = 8081;

app.use(express.json());

/* Import Route Files */
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");

/* Connect Routes */
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Library Management System API Running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
