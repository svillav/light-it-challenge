import React from "react";
import Dropdown from "../Dropdown";
import Logo from "../Logo";
import Link from "../Link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-10 py-3 bg-gray-800 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="relative flex flex-row items-center ">
          <Logo />
          <Link label={"Editar medidas"} />
        </div>
        <div className="flex items-center">
          <Link label={"Nuevo proyecto"} />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;