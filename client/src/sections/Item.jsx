import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import context from "../context/ComponentProvider";
import { bg, juice1, juice2 } from "../assets/images/image";

function Item() {
  const { component, setComponent, url } = useContext(context);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [menuName, setMenuName] = useState("");

  const getItems = async () => {
    try {
      const { data } = await axios.get(`${url}/item/getItems`);
      setItems(data);
      if (!component && data.length > 0) {
        setComponent(data[0].menu._id);
      }
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (component) {
      const filtered = items.filter((item) => item.menu._id === component);
      setFilteredItems(filtered);

      if (filtered.length > 0) {
        setMenuName(filtered[0].menu.description);
      } else {
        setMenuName("");
      }
    } else {
      setFilteredItems(items);
      setMenuName("");
    }
  }, [component, items]);

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        src={juice1}
        alt="Juice 1"
        className="absolute top-8 left-4  md:top-0 md:left-24 w-24 md:w-38 z-10"
      />
      <img
        src={juice2}
        alt="Juice 2"
        className="absolute bottom-2 right-8 md:bottom-20 md:right-29 w-24 sm:w-40 md:w-46 z-10"
      />

      <div className="p-8 sm:p-16 md:p-24 lg:p-32">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white p-10 rounded-lg flex flex-col items-center justify-center">
            {menuName && (
              <div className="inline-flex gap-2 items-center">
                <p className="w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-400"></p>
                <h1
                  className="text-white text-xl md:text-4xl lg:text-5xl font-bold uppercase"
                  style={{ textShadow: "2px 2px 4px #800020" }}
                >
                  {menuName}
                </h1>
                <p className="w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-400"></p>
              </div>
            )}

            <div className="mt-5 grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2  items-center">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div key={index} className="p-3 sm:p-5 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between text-white text-sm sm:text-base md:text-lg uppercase">
                      <span>{item.name}</span>
                      <span className="flex-1 mx-2 h-[1px] border-dotted border-b border-gray-500"></span>
                      <span>${item.price}</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center">
                  <span className="text-white">No items available.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
