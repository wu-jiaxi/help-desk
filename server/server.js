// Server Setup
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.post("/tickets", (req, res) => {
  const { name, email, description, attachment } = req.body;
  // Save ticket to database
  console.log({ name, email, description, attachment });
  res.send("Ticket submitted successfully!");
});

app.get("/admin/tickets", (req, res) => {
  // Fetch and send ticket summaries to admin panel
  const tickets = []; // Fetch tickets from database
  res.json(tickets);
});

app.get("/admin/tickets/:id", (req, res) => {
  const { id } = req.params;
  // Fetch ticket details by ID
  const ticket = {}; // Fetch ticket details from database
  res.json(ticket);
});

app.put("/admin/tickets/:id", (req, res) => {
  const { id } = req.params;
  const { status, response } = req.body;
  // Update ticket status and response
  console.log({ id, status, response });
  res.send("Ticket updated successfully!");
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
