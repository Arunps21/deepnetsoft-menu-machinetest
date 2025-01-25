import React, { useContext, useState } from "react";
import axios from "axios";
import context from "../context/ComponentProvider";

function CreateMenu() {
  const { url } = useContext(context);
  const [menu, setMenu] = useState({ name: "", description: "" });

  const createMenu = (event) => {
    setMenu({ ...menu, [event.target.name]: event.target.value });
  };

  const handleMenu = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${url}/menu/createMenu`, menu);
      console.log(data);

      if (data.status === 200) {
        localStorage.setItem("menu", data.menu._id);
        setMenu({ name: "", description: "" });
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log("In Error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Create New Menu
        </h2>
        <form onSubmit={handleMenu} className="space-y-4">
          <div>
            <label
              htmlFor="menuName"
              className="block text-sm font-medium text-gray-700"
            >
              Menu Name
            </label>
            <input
              type="text"
              id="menuName"
              name="name"
              value={menu.name}
              onChange={createMenu}
              placeholder="Enter menu name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="menuDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="menuDescription"
              name="description"
              value={menu.description}
              onChange={createMenu}
              placeholder="Enter menu description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="text-center">
            <a
              href="/createItems"
              className="text-sm text-indigo-600 hover:underline"
            >
              Create Menu Items
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Menu
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMenu;
