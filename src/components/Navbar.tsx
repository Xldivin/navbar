import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Icon } from '@iconify/react';
import { useTheme } from "next-themes";
import { customHooks } from "@/utils/customHooks";

type Texts = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
};

const Navbar = (props: Texts & { versions1: string[] } & { versions2: string[] } & { versions3: string[] } & { links: string[] } & { resources: string[] })  => {
  const { text1, text2, text3, text4, versions1, versions2, versions3, links, resources } = props;
  const {dropdown1,dropdown2,dropdown3,dropdown4,dropdown5,versionTitle,githubTitle,communityTitle,selectedVersion,selectedVersion2,selectedVersion3,dropdownTransport,dropdownGameObject,dropdownMultiplayer,dropdownGithub,dropdownCommunity,mobileMenu,
    handleVersionClick2,openMenu,closeMenu,handleVersionClick3,handleDropdownClick,handleVersionClick,setdropdownGithub,setMobileMenu,setdropdownCommunity,setdropdownGameObject,setdropdownMultiplayer,setDropdown1,setdropdownTransport,setSelectedVersion,setSelectedVersion2,setSelectedVersion3,setDropdown2,setDropdown3,setDropdown4,setDropdown5, 
  } = customHooks();
  const { theme, setTheme } = useTheme();
  return (
    <nav
      className="relative w-100 items-center flex justify-between bg-black px-0 md:px-4 py-4"
      data-te-navbar-ref
    >
      <div className="flex space-x-[7rem]">
        <div className="flex">
          <div className="flex">
            <AiOutlineMenu className=" flex lg:hidden mr-2 mt-[2px] w-[30px] h-[25px] text-white" onClick={()=>openMenu()}/>
            <a href="#" className="flex gap-[10px]">
              <Image src={Logo} alt="logo" />
              <p className="text-[#fff] text-md font-bold mt-[7px] hover:text-blue-500 cursor-pointer">{text1}</p>
            </a>
          <div className="flex border-r-[1px] hidden lg:flex">
          <p className="text-[#fff] ml-[23px] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
             {text2}
            </p>
          <div
              className="text-[#fff] flex text-md pt-[7px] pl-[20px] cursor-pointer relative"
              onMouseOver={() => setDropdown1(true)}
              onMouseLeave={() => setDropdown1(false)}
            >
                 <p>{selectedVersion}</p>
      <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
      <ul
        className={`absolute right-[-5rem] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
          dropdown1 ? "block" : "hidden"
        }`}
      >
{versions1.map((version) => (

        <li key={version}
          className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500"
          onClick={() => handleVersionClick(version)}
        >
           {version}
        </li>
        ))}
                </ul>
            </div>
          </div>
          </div>
          <div className="flex border-r-[1px] hidden lg:flex">
            <p className="text-[#fff] ml-[23px] text-md mt-[7px] hover:text-blue-500 cursor-pointer">{text3}</p>
            <div
              className="text-[#fff] flex text-md pt-[7px] pl-[20px] relative cursor-pointer"
              onMouseOver={() => setDropdown2(true)}
              onMouseLeave={() => setDropdown2(false)}
            >
              <p className="hover:text-blue-500">{selectedVersion2}</p>
              <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
              <ul
                className={`absolute right-[-5rem] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                  dropdown2 ? "block" : "hidden"
                }`}
              >
                {versions2.map((version) => (
                <li key={version} className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500"  onClick={() => handleVersionClick2(version)}>
                 {version}
                </li> ))}
              </ul>
            </div>
          </div>
          <div className="flex border-r-[1px] hidden lg:flex">
            <p className="text-[#fff] ml-[23px] text-md mt-[7px] hover:text-blue-500 cursor-pointer">{text4}</p>
            <div
              className="text-[#fff] flex text-md pt-[7px] pl-[20px] relative cursor-pointer"
              onMouseOver={() => setDropdown3(true)}
              onMouseLeave={() => setDropdown3(false)}
            >
              <p className="hover:text-blue-500">{selectedVersion3}</p>
              <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
              <ul
                className={`absolute right-[-5rem] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                  dropdown3 ? "block" : "hidden"
                }`}
              >
                {versions3.map((version) => (<li key={version} className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500" onClick={() => handleVersionClick3(version)}>
                  {version}
                </li>))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex text-[#fff] absolute right-4">
          <div
            className="relative cursor-pointer hidden lg:flex"
            onMouseOver={() => setDropdown4(true)}
            onMouseLeave={() => setDropdown4(false)}
          >
            <FaGithub className="w-[25px] h-[25px] text-md mt-[7px]" />
            <ul
              className={`absolute right-0 w-[20rem] py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                dropdown4 ? "block" : "hidden"
              }`}
            >
             {links.map((link) => ( <li key={link} className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 text-[#000] hover:text-blue-500">
                {link}
              </li>))}
            </ul>
          </div>
          <div
            className="relative cursor-pointer hidden lg:flex"
            onMouseOver={() => setDropdown5(true)}
            onMouseLeave={() => setDropdown5(false)}
          >
            <MdMessage className="w-[25px] h-[25px] text-md mt-[7px] ml-[10px]" />
            <ul
              className={`absolute right-[-3rem] w-[15rem] py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                dropdown5 ? "block" : "hidden"
              }`}
            >
              {resources.map((resource) => (<li key={resource} className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500">
              {resource}
              </li>))}
            </ul>
          </div>
          <div>
            {theme === "light" ? (
              <Icon
                icon="bi:sun"
                className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <Icon icon="fa6-regular:moon" className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]"
              onClick={() => setTheme("light")} />
            )}
          </div>
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
        </div>
      </div>

      {/* Mobile */}

      {mobileMenu &&(
      <div className="flex lg:hidden h-screen w-screen absolute left-0 top-0">
      <div className="h-screen w-4/5 bg-black relative">
        <div className="flex justify-between p-4">
        <a href="#" className="flex">
          <Image src={Logo} alt="logo" />
          <p className="text-[#fff] text-md font-bold mt-[15px] hover:text-blue-500 cursor-pointer overflow-hidden whitespace-nowrap text-overflow-ellipsis">{text1}</p>
        </a>
        <Icon icon="system-uicons:cross" color="white" width="48" onClick={()=>closeMenu()} />
        </div>
        <div className="px-4">
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
             {text2}
            </p>
            <div className="block border-b border-white">
        <div className=" flex justify-between" onClick={() => handleDropdownClick("dropdownGameObject")}>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            Version
        </p>
        <Icon icon="ri:arrow-drop-down-line" color="white" width="48" className={`transition-transform duration-200 transform ${
                  dropdownGameObject ? "rotate-180" : ""
                }`} />
        </div>
        {dropdownGameObject && ( <ul>
          {versions1.map((version) => (

<li key={version}
  className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white cursor-pointer"
  onClick={() => handleVersionClick(version)}
>
   {version}
</li>))}
        </ul>
        )}
        </div>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {text2}
        </p>
        <div className="block border-b border-white">
        <div className=" flex justify-between" onClick={() => handleDropdownClick("dropdownTransport")}>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
           {versionTitle}
        </p>
        <Icon icon="ri:arrow-drop-down-line" color="white" width="48" className={`transition-transform duration-200 transform ${
                  dropdownTransport ? "rotate-180" : ""
                }`} />
        </div>
        {dropdownTransport && ( <ul>
          {versions2.map((version) => (
                <li key={version} className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"  onClick={() => handleVersionClick(version)}>
                 {version}
                </li> ))}
        </ul>
        )}
        </div>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
           {text3}
        </p>
        <div className="block border-b border-white">
        <div className=" flex justify-between" onClick={() => handleDropdownClick("dropdownMultiplayer")}>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {versionTitle}
        </p>
        <Icon icon="ri:arrow-drop-down-line" color="white" width="48" className={`transition-transform duration-200 transform ${
                  dropdownMultiplayer ? "rotate-180" : ""
                }`} />
        </div>
        {dropdownMultiplayer && ( <ul>
          {versions3.map((version) => (
                <li key={version} className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"  onClick={() => handleVersionClick(version)}>
                 {version}
                </li> ))}
        </ul>
        )}
        </div>
        <div className="block">
        <div className=" flex" onClick={() => handleDropdownClick("dropdownGithub")}>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
           {githubTitle}
        </p>
        <Icon icon="ri:arrow-drop-down-line" color="white" width="48" className={`mt-[-5px] transition-transform duration-200 transform ${
                  dropdownGithub ? "rotate-180" : ""
                }`}/>
        </div>
        {dropdownGithub && (
        <ul>
       {links.map((link) => (
                <li key={link} className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"  onClick={() => handleVersionClick(link)}>
                 {link}
                </li> ))}
        </ul>)}
        </div>
        <div className="block">
        <div className=" flex" onClick={() => handleDropdownClick("dropdownCommunity")}>
        <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {communityTitle}
        </p>
        <Icon icon="ri:arrow-drop-down-line" color="white" width="48" className={`mt-[-5px] transition-transform duration-200 transform ${
                  dropdownCommunity ? "rotate-180" : ""
                }`}/>
        </div>
        {dropdownCommunity && (
        <ul>
      {resources.map((resource) => (
                <li key={resource} className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"  onClick={() => handleVersionClick(resource)}>
                 {resource}
                </li> ))}
        </ul>)}
        </div>
        </div>
      </div>
      <div className="h-screen w-1/5 bg-black brightness-80 opacity-80" onClick={()=>closeMenu()} />
    </div>
      )}
      
    </nav>
  );
};

export default Navbar;
