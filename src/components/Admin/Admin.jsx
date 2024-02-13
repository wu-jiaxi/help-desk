import React, { useState, useEffect } from "react";
import axios from "axios"; // You might need to install axios using npm or yarn
import "../Admin/Admin.css";

function Admin() {
  const [data, setData] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/tickets"); // Replace '/api/data' with your actual backend API endpoint
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tickets/${id}`);
      setData(data.filter((item) => item.id !== id)); // Update the state to remove the item
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const toggleItem = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  const handleResponseClick = (event) => {
    // Prevent click event from bubbling up to the parent list item
    event.stopPropagation();
  };

  return (
    <div>
      <ul>
        <h1>My Data</h1>
        {data.map((item) => (
          <li key={item.id} onClick={() => toggleItem(item.id)}>
            <div id="itemDescription">
              <div className="itemStyles">{item.name}</div>
              <div className="itemStyles">{item.email}</div>
              <div className="itemStyles">{item.description}</div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            {expandedItemId === item.id && (
              <div>
                <textarea
                  onClick={handleResponseClick}
                  placeholder="Your response"
                ></textarea>
                <button>Send</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
