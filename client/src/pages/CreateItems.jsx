import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import context from "../context/ComponentProvider";

function CreateItems() {
  const [menus, setMenus] = useState([]);
  const { url } = useContext(context);
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    menuId: "",
  });

  const createItem = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleItem = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${url}/item/createItem`, item);
      if (data.status === 200) {
        setItem({ name: "", description: "", price: "", menuId: "" });
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log("In Error:", err);
    }
  };

  const getMenu = async () => {
    try {
      const { data } = await axios.get(`${url}/menu/getMenu`);
      if (data) {
        setMenus(data);
      } else {
        console.log("Error in fetching");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Add New Item
        </h2>
        <form onSubmit={handleItem} className="space-y-4">
          <div>
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="name"
              value={item.name}
              onChange={createItem}
              placeholder="Enter item name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="itemDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="itemDescription"
              name="description"
              value={item.description}
              onChange={createItem}
              placeholder="Enter item description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="itemPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="itemPrice"
              name="price"
              value={item.price}
              onChange={createItem}
              placeholder="Enter price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="menuSelect"
              className="block text-sm font-medium text-gray-700"
            >
              Menu
            </label>
            <select
              id="menuSelect"
              name="menuId"
              value={item.menuId}
              onChange={createItem}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select a Menu</option>
              {menus.map((menu) => (
                <option key={menu._id} value={menu._id}>
                  {menu.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateItems;
