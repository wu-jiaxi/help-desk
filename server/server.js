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
let formDataStorage = [];

// Routes

app.post("/api/tickets", (req, res) => {
  const formData = req.body.formData;
  formDataStorage.push(formData);
  // Here you would typically process the form data, such as saving it to a database
  console.log("Received form data:", formData);
  // Respond with a success message
  res.status(200).send("Ticket submitted successfully.");
});

app.get("/api/tickets", (req, res) => {
  res.json(formDataStorage);
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
