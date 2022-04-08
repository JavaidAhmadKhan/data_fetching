import React, { useState } from "react";
import axios from "axios";

import "./post-data.css";

function PostData() {
  const url = "https://reqres.in/api/users/create";
  const [data, setData] = useState({
    name: "",
    job: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        date: data.job,
      })
      .then((res) => {
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
          id="job"
          value={data.job}
          placeholder="job"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostData;
