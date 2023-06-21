import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchComponent = () => {
  return (
    <div className="relative">
      <div className="inset-y-0 flex items-center pl-3 pointer-events-none">
        <BsSearch className="text-white sm:text-black top-[-6px] mt-[14px] sm:mt-4 relative sm:absolute" />
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-[10rem] dark:bg-[#444950] dark:text-[#fff]  hidden md:flex h-2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#fff]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchComponent;
