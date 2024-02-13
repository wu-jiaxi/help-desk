import express from "express";
import collection from "./mongo.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { formData } = req.body;
  const data = {
    formData: formData,
  };

  await collection.insertMany([data]);
});

app.listen(3001, () => {
  console.log("port connected");
});
