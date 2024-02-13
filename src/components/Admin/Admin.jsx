import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/Admin.css";

function Admin() {
  const [data, setData] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/tickets");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/tickets/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const toggleItem = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  const handleResponseClick = (event) => {
    event.stopPropagation();
  };

  const handleStatusClick = (event) => {
    // Prevent click event from propagating to the parent list item
    event.stopPropagation();
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:3001/api/tickets/${id}`, { status });
      // Update the status in the local state
      setData(
        data.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
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
              <div className="itemStyles">
                Status: {item.status}
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.id, e.target.value)}
                  onClick={handleStatusClick}
                >
                  <option value="new">New</option>
                  <option value="in progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
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
