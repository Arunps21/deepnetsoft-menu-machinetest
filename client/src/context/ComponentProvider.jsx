import React from "react";
import { createContext } from "react";
import { useState } from "react";

const context = createContext();

export function ComponentProvider({ children }) {
  const [component, setComponent] = useState("");
  const url = import.meta.env.VITE_BACKEND_URL;
  return (
    <context.Provider value={{ component, setComponent, url }}>
      {children}
    </context.Provider>
  );
}

export default context;
