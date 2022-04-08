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
      <tbody>
        <tr>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th> Employee Age</th>
        </tr>
        {users.people.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.last_name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
}
