// Main Page (End User Submission Form)
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend
    console.log(formData);
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit} id="form">
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
