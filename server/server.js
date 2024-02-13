// Server Setup
import express from "express";
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//prevent cors errors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
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
  console.log("here is post", formDataStorage);
});

app.put("/api/tickets/:id", (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  const index = formDataStorage.findIndex((item) => item.id === id);

  if (index !== -1) {
    formDataStorage[index].status = status;
    console.log("Ticket status updated successfully.");
    res.status(200).send("Ticket status updated successfully.");
  } else {
    console.log("Ticket not found.");
    res.status(404).send("Ticket not found.");
  }
});

app.delete("/api/tickets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log("Delete request received for ID:", id);
  console.log("showing delete formdata", formDataStorage);
  const index = formDataStorage.findIndex((item) => item.id);
  console.log("index", index);
  if (index !== -1) {
    formDataStorage.splice(index, 1);
    console.log("Ticket deleted successfully.");
    res.status(200).send("Ticket deleted successfully.");
  } else {
    console.log("Ticket not found.");
    res.status(404).send("Ticket not found.");
  }
});

app.get("/api/tickets", (req, res) => {
  res.json(formDataStorage);
  console.log("here is get", formDataStorage);
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
