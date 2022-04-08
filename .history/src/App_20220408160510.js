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

        {users.people.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.last_name}</td>
            <td>{item.age}</td>
            <td>{item.Occupation}</td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
}
