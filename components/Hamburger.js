import * as React from "react";

// Import use state
import { useState } from "react";

import '../css/main.css';

export default function Hamburger() {
    return(
        <nav className="navBar">
                <button onClick={handleToggle}>
                  <div className={navbarOpen ? "open" : "close"}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                  </div>
                  </button>
                <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                  <li>
                    <a href="#">Menu</a>
                    <a href="#">Catering</a>
                    <a href="#">About</a>
                  </li>
                </ul>
              </nav>
    );
}