import React, { useEffect, useState } from "react";
import axios from "axios";
import './UseEffectExample1.css';

function UseEffectExample1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading users...</p>;

  return (
    <div className="container">
      <h2 className="heading">User List from JSONPlaceholder</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-card">
            <div>
              <strong>{user.name}</strong> ({user.username})<br />
              📧 {user.email}<br />
              📱 {user.phone}<br />
              🌐 <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a><br />
              🏢 {user.company.name}<br />
              🏠 {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectExample1;
