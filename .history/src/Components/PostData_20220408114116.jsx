import React, { useState } from "react";
import axios from "axios";

import "./post-data.css";

function PostData() {
  const url = "";
  const [data, setDate] = useState({
    name: "",
    date: "",
    iduser: "",
  });

  function handlerSubmit(e) {}

  return (
    <div>
      <form>
        <input
          onClick={(e) => handlerSubmit(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          onClick={(e) => handlerSubmit(e)}
          id="date"
          value={data.date}
          placeholder="date"
          type="date"
        ></input>
        <input
          onClick={(e) => handlerSubmit(e)}
          id="iduser"
          value={data.iduser}
          placeholder="iduser"
          type="number"
        ></input>
      </form>
      <button type="button">Add User</button>
    </div>
  );
}

export default PostData;
