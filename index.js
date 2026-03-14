const express = require("express");
const app = express();

app.use(express.json());

// health check
app.get("/health", (req, res) => res.status(200).send("OK"));

// placeholders (we’ll implement later)
app.post("/admin/sync", (req, res) => {
  res.status(501).json({ message: "Not implemented yet. Next step: connect Drive + DB + indexing." });
});

app.post("/retrieve", (req, res) => {
  res.status(501).json({ message: "Not implemented yet. Next step: vector search (Tax vs Nexus) + routing." });
});

// Cloud Run requires listening on PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
