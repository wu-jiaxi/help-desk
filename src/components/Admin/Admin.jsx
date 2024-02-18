import { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/Admin.css";

function Admin() {
  const [data, setData] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  //get and display tickets sent from form component
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
      console.log("Would normally send email here with body: …");
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const toggleItem = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };
  //stops default behavior of opening one box when clicking another
  const handleResponseClick = (event) => {
    event.stopPropagation();
  };
  //stops default behavior of opening one box when clicking another
  const handleStatusClick = (event) => {
    event.stopPropagation();
  };

  //updates status
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:3001/api/tickets/${id}`, { status });

      setData(
        data.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <ul id="itemDescription">
        <div id="heading-container">
          <h2 id="heading">Unanswered Tickets</h2>
        </div>
        {Array.isArray(data) &&
          data.map((item) => (
            <li key={item.id} onClick={() => toggleItem(item.id)}>
              <div id="itemBorderStyle">
                <div className="itemStyles">Name: {item.name}</div>
                <div className="itemStyles">Email: {item.email}</div>
                <div className="itemStyles">
                  Description: {item.description}
                </div>
                <div className="itemStyles">
                  Status: {item.status}
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(item.id, e.target.value)
                    }
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
                <div id="drilldown">
                  <textarea
                    onClick={handleResponseClick}
                    placeholder="Your response"
                  ></textarea>
                  <button id="drillDownButton">Send</button>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Admin;
