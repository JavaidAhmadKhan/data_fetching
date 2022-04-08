import React, { useState } from "react";
import axios from "axios";

import "./post-data.css";

function PostData() {
  const url = "";
  const [data, setData] = useState({
    name: "",
    date: "",
    iduser: "",
  });

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: data.iduser,
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
        ></input>
        <input
          onChange={(e) => handlerSubmit(e)}
          id="date"
          value={data.date}
          placeholder="date"
          type="date"
        ></input>
        <input
          onChange={(e) => handlerSubmit(e)}
          id="iduser"
          value={data.iduser}
          placeholder="iduser"
          type="number"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostData;
