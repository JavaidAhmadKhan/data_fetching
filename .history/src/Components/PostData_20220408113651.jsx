import React from "react";
import axios from "axios";

import './post-data.css'

function PostData() {
  return (
    <div>
      <form>
        <input placeholder="name" type="text"></input>
        <input placeholder="iduser" type="number"></input>
      </form>
      <button type="button">Add User</button>
    </div>
  );
}

export default PostData;
