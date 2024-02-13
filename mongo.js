import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/form-data")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  formData: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

export default collection;
