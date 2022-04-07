import { useEffect, useState } from "react";
import "./app.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const json = await response.json();
    setUsers(json.data);
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <table key={user.id}>
          <tbody>
            <div className="container">
              <p>{user.first_name}</p>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.avatar}`} />
              </td>
            </div>
          </tbody>
        </table>
      ))}
    </div>
  );
}
