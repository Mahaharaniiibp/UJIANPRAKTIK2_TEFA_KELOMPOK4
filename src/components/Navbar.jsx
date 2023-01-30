import React, { useState } from "react";
import { Menu } from "react-ionicons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
  ];
  return (
    <nav
      className="fixed w-full left-0 top-0 z-[999] bg-yellow-300 text-gray-900"
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="flex items-center justify-start text-4xl uppercase font-bold">
            <span className="text-blue-600 text-4xl">FOURTYK</span>
          </h4>
        </div>
        <div
          className="md:bg-white/0 bg-white text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full"
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-blue-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-orange-700" : "text-orange-100"
          } text-3xl md:hidden m-5`}
        >
          <Menu />
        </div>
        <div
          className={`md:hidden text-eunoiatext absolute w-2/5 h-screen
      px-7 py-2 font-medium bg-white/90 top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-orange-00">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;