import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import context from "../context/ComponentProvider";
import { buttonImg } from "../assets/images/image";

function Button() {
  const [menus, setMenus] = useState([]);
  const { setComponent, url } = useContext(context);

  const getMenu = async () => {
    try {
      const { data } = await axios.get(`${url}/menu/getMenu`);
      setMenus(data);
    } catch (error) {
      console.error("Error fetching menus:", error.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleButtonClick = (id) => {
    setComponent(id);
  };

  return (
    <div className="relative flex items-center justify-center h-[150px]">
      <img
        className="absolute inset-0 w-full h-full brightness-50"
        src={buttonImg}
        alt="Button Background"
      />
      <div className="relative z-10 flex flex-wrap justify-center gap-4">
        {menus.map((menu) => (
          <button
            key={menu._id}
            className="px-4 py-2 bg-black text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition uppercase"
            onClick={() => handleButtonClick(menu._id)}
          >
            {menu.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
