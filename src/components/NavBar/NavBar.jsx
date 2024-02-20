import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <main className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl">
        Chris Coutts
      </Link>
    </main>
  );
};

export default NavBar;
