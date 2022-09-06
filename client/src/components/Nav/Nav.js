import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/portfolio'>Portfolio</Link>
    </div>
  );
}

export default Nav;
