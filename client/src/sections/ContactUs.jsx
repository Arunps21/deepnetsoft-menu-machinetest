import React from "react";
import { FaBlenderPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { dns } from "../assets/images/image";

const ContactUs = () => {
  return (
    <div className="bg-black text-white p-16">
      <div className="flex flex-col md:flex-row md:gap-6 gap-4">
        <div className="border rounded-xl border-white px-10 py-5 flex-1 order-2 md:order-1 flex flex-col items-center justify-center">
          <h1 className="text-blue-500 text-center">CONTACT WITH US</h1>
          <div className="text-center">
            <p className="text-white flex items-center justify-center gap-2">
              <FaBlenderPhone className="text-yellow-500" /> +91 9567843340
            </p>
            <p className="text-white flex items-center justify-center gap-2">
              <CiMail className="text-yellow-500" /> info@deepnetsoft.com
            </p>
          </div>
        </div>

        <div className="border rounded-xl border-white px-10 py-5 flex-1 order-1 md:order-2 flex flex-col items-center text-center">
          <img src={dns} alt="" className="relative w-16 bottom-12" />
          <h2 className="flex justify-center relative bottom-8 text-4xl">
            <span className="text-blue-500 mr-2">DEEP</span>
            <span className="text-white mr-2">NET</span>
            <span className="text-stone-500">SOFT</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-2 relative bottom-6">
            <FiFacebook className="text-stone-600" />
            <FaTwitter className="text-stone-600" />
            <FaYoutube className="text-stone-600" />
            <FiInstagram className="text-stone-600" />
          </div>
        </div>

        <div className="border rounded-xl border-white px-10 py-5 flex-1 order-3 md:order-3 flex flex-col justify-center items-center text-center">
          <h1 className="text-blue-500">FIND US</h1>
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <p className="text-white flex items-center gap-2">
                <CiLocationOn className="text-yellow-500" /> First floor, Geo
                Infopark,
              </p>
              <p className="text-white">Infopark EXPY, Kakkanad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
