// Server Setup
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.post("", (req, res) => {
  const formData = req.body;
  // Process form data here
  console.log(formData);
  // Send response
  res.sendStatus(200); // or whatever appropriate status
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
