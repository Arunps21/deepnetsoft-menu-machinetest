import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ComponentProvider } from "./context/ComponentProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import CreateMenu from "./pages/CreateMenu";
import CreateItems from "./pages/CreateItems";

const App = () => {
  return (
    <div className="absolute w-full">
      <ComponentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/createmenu" element={<CreateMenu />} />
        </Routes>
        <Routes>
          <Route path="/createitems" element={<CreateItems />} />
        </Routes>
        <Footer />
      </ComponentProvider>
    </div>
  );
};

export default App;
