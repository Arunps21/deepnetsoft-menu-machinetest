import React from "react";
import { hero } from "../assets/images/image";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={hero}
        alt="Hero"
        className="h-[50vh] md:h-[70vh] w-full object-cover"
      />
      <p className="absolute text-gray-500 left-35 top-0 text-xl  font-semibold hidden lg:block">
        SOFT
      </p>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
          style={{ textShadow: "2px 2px 4px #800020" }}
        >
          MENU
        </h1>
        <p className="text-stone-200 text-sm w-5/6 md:w-2/3 lg:w-1/2 ">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
};

export default Hero;
