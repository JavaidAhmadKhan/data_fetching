import { useState } from "react";
import "./app.css";

export default function App() {
  const [users, setUsers] = useState([]);
  fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        const {name} = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      },[]);
   

  // const [data, setData] = useState([
  //   {
  //     id: 7,
  //     email: "michael.lawson@reqres.in",
  //     first_name: "Michael",
  //     last_name: "Lawson",
  //     avatar: "https://reqres.in/img/faces/7-image.jpg",
  //   },
  //   {
  //     id: 8,
  //     email: "lindsay.ferguson@reqres.in",
  //     first_name: "Lindsay",
  //     last_name: "Ferguson",
  //     avatar: "https://reqres.in/img/faces/8-image.jpg",
  //   },
  //   {
  //     id: 9,
  //     email: "tobias.funke@reqres.in",
  //     first_name: "Tobias",
  //     last_name: "Funke",
  //     avatar: "https://reqres.in/img/faces/9-image.jpg",
  //   },
  //   {
  //     id: 10,
  //     email: "byron.fields@reqres.in",
  //     first_name: "Byron",
  //     last_name: "Fields",
  //     avatar: "https://reqres.in/img/faces/10-image.jpg",
  //   },
  //   {
  //     id: 11,
  //     email: "george.edwards@reqres.in",
  //     first_name: "George",
  //     last_name: "Edwards",
  //     avatar: "https://reqres.in/img/faces/11-image.jpg",
  //   },
  //   {
  //     id: 12,
  //     email: "rachel.howell@reqres.in",
  //     first_name: "Rachel",
  //     last_name: "Howell",
  //     avatar: "https://reqres.in/img/faces/12-image.jpg",
  //   },
  // ]);

  

}
  return (
    <div>
      {data.map((data) => (
        <table key={data.id}>
          <tr>
            <div className="container">
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>
                <img src={data.avatar} alt={`${data.avatar}`} />
              </td>
            </div>
          </tr>
        </table>
      ))}
    </div>
  );
}
