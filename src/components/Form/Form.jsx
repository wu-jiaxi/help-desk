import { useState } from "react";
import axios from "axios";
import "../Form/Form.css";
import { v4 as uuidv4 } from "uuid";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    attachment: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // input validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      alert("Submitted");
      const newFormData = { ...formData, id: uuidv4() };
      //for express paths, its important to make sure "/api/tickets" and other paths match to the express routes in the server for passing data to work
      await axios.post("http://localhost:3001/api/tickets", {
        formData: newFormData,
      });
      await axios.post("http://localhost:3001/api/uploads", {
        formData: newFormData,
      });
      //clear form after submitting
      setFormData({
        name: "",
        email: "",
        description: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Error submitting ticket", error);
    }
  };

  return (
    <div id="form-container">
      <form
        onSubmit={handleSubmit}
        action="POST"
        id="form"
        name="form"
        encType="multipart/form-data"
      >
        <input
          id={Math.random()}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          autoComplete="name-field"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="email-field"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          autoComplete="description-field"
        />
        <input
          type="file"
          name="attachment"
          onChange={(e) => {
            console.log("File selected:", e.target.files[0]);
            setFormData({ ...formData, attachment: e.target.files[0] });
          }}
          autoComplete="image-field"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
