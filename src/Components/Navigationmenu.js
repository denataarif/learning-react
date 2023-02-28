import React from "react";
import { Link } from "react-router-dom";
const Navigationmenu = (props) => {
  return (
    <>
      <div className="font-bold py-3">the menu</div>
      <ul>
        <li>
          <Link to="/" onClick={props.Closemenu} className='text-blue-500 py-3 border-t border-b block'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={props.Closemenu} className='text-blue-500 py-3 border-b block'>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={props.Closemenu} className='text-blue-500 py-3 border-b block'>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigationmenu;
