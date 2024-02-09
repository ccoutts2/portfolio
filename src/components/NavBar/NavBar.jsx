import Link from "next/link";
import React from "react";
import "@/styles/partials/resets";
import "@/styles/partials/variables";

const NavBar = () => {
  return (
    <header>
      <div>
        <h1>Chris Coutts</h1>
      </div>
      <ul>
        <Link href="#">
          <li>Projects</li>
        </Link>
        <Link href="#">
          {" "}
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default NavBar;
