import React from "react";
import { name, city } from "../data/data.js";

let style1 = {
  color: 'firebrick'
}

function Home() {
  // update the JSX being returned!
  return <div>Home
    <h1 style={style1} id="home"> {name} is a Web Developer from {city} </h1>
  </div>;
}

export default Home;
