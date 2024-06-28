import React from "react";
import { FiList } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-16">
        <img className="h-4 w-10  " src="./assets/logo.png" alt="" />
        <button className=" font-Fjalla bg-gradient-to-r from-slate-700 via-gray-400 to-slate-600 hover:from-pink-500 hover:to-yellow-500 text-s text-white px-2 py-2 rounded-2xl ">
          Download CV
        </button>
      </div>
      <div>
        <FiList className="size-9" />
      </div>
    </div>
  );
};

export default Header;
