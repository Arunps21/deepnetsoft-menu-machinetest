import React, { useState } from "react";
import { dns } from "../assets/images/image";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-[#121618] px-16 flex justify-between items-center md:items-baseline">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-center md:items-baseline pt-5 gap-3 w-full sm:w-auto">
        <img
          src={dns}
          alt=""
          className="w-16 relative md:left-0 sm:top-0 top-8 md:top-8 z-10"
        />
        <h1 className="text-xl text-blue-400 hidden lg:block">
          DEEP <span className="text-white">NET</span>
        </h1>
      </div>
      <div className="flex gap-4 pb-1">
        <NavLink to={"/createmenu"}>
          <p className="text-white hover:text-blue-500 hidden lg:block">HOME</p>
        </NavLink>
        <NavLink to={"/"}>
          <p className="text-white hover:text-blue-500 hidden lg:block">MENU</p>
        </NavLink>
        <p className="text-white hover:text-blue-500 hidden lg:block">
          MAKE A RESERVATION
        </p>
        <p className="text-white hover:text-blue-500 hidden lg:block">
          CONTACT US
        </p>
      </div>
      <GiHamburgerMenu
        className="w-5 h-5 cursor-pointer sm:hidden dark:text-white"
        onClick={() => setVisible(true)}
      />
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-[#212121] transition-all z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 relative">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center absolute gap-4 p-3 right-4 top-2 cursor-pointer"
          >
            <RxCross1 className="dark:text-white w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-lg mt-28 uppercase text-white">
          <NavLink onClick={() => setVisible(false)} to="/createmenu">
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/">
            MENU
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contactus">
            MAKE A RESERVATION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contactus">
            CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
