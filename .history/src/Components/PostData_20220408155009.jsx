import React, { useState } from "react";
import Axios from "axios";

import "./post-data.css";

function PostData() {
  const url = "http://dummy.restapiexample.com/api/v1/create";
  const [data, setData] = useState({
    name: "",
    salary: "",
    age: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      date: data.job,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handlerSubmit(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handlerSubmit(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        />
        <input
          onChange={(e) => handlerSubmit(e)}
          id="salary"
          value={data.salary}
          placeholder="salary"
          type="number"
        />
        <input
          onChange={(e) => handlerSubmit(e)}
          id="age"
          value={data.age}
          placeholder="age"
          type="number"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostData;
