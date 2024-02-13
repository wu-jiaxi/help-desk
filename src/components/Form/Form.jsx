// Main Page (End User Submission Form)
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Form/Form.css";

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
    try {
      alert("submitted");
      await axios.post("http://localhost:3001", {
        formData,
      });
    } catch (error) {
      console.error("Error submitting ticket", error);
    }
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit} action="POST" id="form">
        <input
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
          onChange={(e) =>
            setFormData({ ...formData, attachment: e.target.files[0] })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
