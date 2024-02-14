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

    // Perform input validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      alert("submitted");
      const newFormData = { ...formData, id: uuidv4() };
      //for express paths, its important to make sure "/api/tickets" and other paths match to the express routes in the server for passing data to work
      await axios.post("http://localhost:3001/api/tickets", {
        formData: newFormData,
      });

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
        encType="multipart/form-data"
      >
        <input
          id={Math.random()}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="file"
          name="attachment"
          onChange={(e) => {
            console.log("File selected:", e.target.files[0]);
            setFormData({ ...formData, attachment: e.target.files[0] });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
