// Server Setup
import express from "express";
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  console.log(formData);
  // Send response
  res.sendStatus(200); // or whatever appropriate status
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
