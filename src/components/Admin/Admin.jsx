import React, { useState, useEffect } from "react";
import axios from "axios"; // You might need to install axios using npm or yarn
import "../Admin/Admin.css";

function Admin() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <ul>
        <h1>My Data</h1>
        {data.map((item) => (
          <li key={item.id}>
            <div id="itemDescription">
              <div>{item.id}</div>
              <div className="itemStyles">{item.name}</div>
              <div className="itemStyles">{item.email}</div>
              <div className="itemStyles">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
