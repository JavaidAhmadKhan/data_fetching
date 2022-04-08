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
        <tbody key={user.id}>
          <thead>
            
              <td>{user.employee_name}</td>
              <td>{user.employee_salary}</td>
              <td>{user.employee_age}</td>
              <td>
                <img src={user.profile_image} alt={`${user.profile_image}`} />
              </td>
            
          </thead>
        </tbody>
      ))}
    </Fragment>
  );
}
