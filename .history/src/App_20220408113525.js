import { Fragment, useEffect, useState } from "react";
import PostData from './Components/PostData'

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
    <Fragment>
      <button type="button">Add User</button>
      {users.map((user) => (
        <table key={user.id}>
          <thead>
            <div className="container">
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.avatar}`} />
              </td>
            </div>
          </thead>
        </table>
      ))}
    </Fragment>
  );
}