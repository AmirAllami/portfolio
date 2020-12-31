import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [show, toggleShow] = useState(false);
  return (
    <div className="nav">
      <button className="hamburger" onClick={() => toggleShow(!show)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={show ? "nav-options show" : "nav-options"}>
        <li>
          <Link to="/" className="link-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/Projects" className="link-item">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Education" className="link-item">
            Education & Skills
          </Link>
        </li>

        <li>
          <Link to="/Contacts" className="link-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
