import React, { useState } from "react";
import axios from "axios";

import "./post-data.css";

function PostData() {
  const url = "";
  const [data, setDate] = useState({
    name: "",
    date: "",
  });
  return (
    <div>
      <form>
        <input placeholder="name" type="text"></input>
        <input placeholder="date" type="date"></input>
        <input placeholder="iduser" type="number"></input>
      </form>
      <button type="button">Add User</button>
    </div>
  );
}

export default PostData;
