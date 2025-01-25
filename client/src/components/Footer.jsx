import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121618] text-white px-6 md:px-11 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Deepnetsoft Solutions. All rights
          reserved.
        </p>

        <div className="flex md:flex-row gap-2 md:gap-4">
          <a href="#" className="text-sm md:text-base hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm md:text-base hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
