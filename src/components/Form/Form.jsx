// Main Page (End User Submission Form)
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Form/Form.css";
import { useParams } from "react-router-dom";

const TicketForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: Math.random(),
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
      //for express paths, its important to make sure "/api/tickets" and other paths match to the express routes in the server for passing data to work
      await axios.post("http://localhost:3001/api/tickets", {
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
