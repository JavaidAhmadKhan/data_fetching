import { Fragment, useEffect, useState } from "react";
import PostData from "./Components/PostData";

import "./app.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    const response = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    const json = await response.json();
    setUsers(json.data);
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <Fragment>
      <PostData />
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
