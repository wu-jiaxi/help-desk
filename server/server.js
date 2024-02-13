// Server Setup
import express from "express";
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//prevent cors errors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.post("", (req, res) => {
  const formData = req.body;
  // Process form data here
  console.log("WE ARE HERE", formData);
  // Send response
  res.sendStatus(200); // or whatever appropriate status
});

app.post("/api/tickets", (req, res) => {
  const formData = req.body;
  // Here you would typically process the form data, such as saving it to a database
  console.log("Received form data:", formData);
  // Respond with a success message
  res.status(200).send("Ticket submitted successfully.");
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
