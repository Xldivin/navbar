import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";
import { customHooks } from "@/utils/customHooks";


type Texts = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

const Navbar = (props:Texts) => {
  const {text1 , text2, text3, text4 } = props

  const {
    dropdown1,
    dropdown2,
    dropdown3,
    dropdown4,
    dropdown5,
    setDropdown1,
    setDropdown2,
    setDropdown3,
    setDropdown4,
    setDropdown5,
  } = customHooks();

  const {theme, setTheme} = useTheme();
  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-[#000] py-2 h-[60px] lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex space-x-[7rem]">
        <div className="flex">
          <div className="ml-[20px] flex border-r-2">
            <a href="#" className="flex gap-[10px]">
              <Image src={Logo} alt="logo" />
              <p className="text-[#fff] mt-[3px]">{text1}</p>
            </a>

            <p className="text-[#fff] ml-[23px] mt-[3px]">
             {text2}
            </p>
            <div
              className="text-[#fff] flex mt-[3px] ml-[20px] cursor-pointer relative"
              onMouseOver={() => setDropdown1(true)}
              onMouseLeave={() => setDropdown1(false)}
            >
              <p>1.5.1</p>
              <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
              <ul
                className={`absolute right-[-5rem] bg-[#fff] dark:bg-[#000] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                  dropdown1 ? "block" : "hidden"
                }`}
              >
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.5.1
                </li>
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.4.0
                </li>
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.3.0
                </li>
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.1.0
                </li>
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.0.0
                </li>
                <li className="flex w-full dark:text-[#fff] items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  0.1.0
                </li>
              </ul>
            </div>
          </div>
          <div className="flex border-r-2">
            <p className="text-[#fff] ml-[23px] mt-[3px]">{text3}</p>
            <div
              className="text-[#fff] flex mt-[3px] ml-[20px] relative"
              onMouseOver={() => setDropdown2(true)}
              onMouseLeave={() => setDropdown2(false)}
            >
              <p>2.0.0</p>
              <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
              <ul
                className={`absolute right-[-5rem] bg-[#fff] dark:bg-[#000] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                  dropdown2 ? "block" : "hidden"
                }`}
              >
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  2.0.0
                </li>
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.0.0
                </li>
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  0.8.0
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <p className="text-[#fff] ml-[23px] mt-[3px]">{text4}</p>
            <div
              className="text-[#fff] flex mt-[3px] ml-[20px] relative"
              onMouseOver={() => setDropdown3(true)}
              onMouseLeave={() => setDropdown3(false)}
            >
              <p>2.0.0-pre</p>
              <IoMdArrowDropdown className="mt-[-1px] w-[30px] h-[30px]" />
              <ul
                className={`absolute right-[-5rem] bg-[#fff] dark:bg-[#000] w-40 py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                  dropdown3 ? "block" : "hidden"
                }`}
              >
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  2.0.0-pre
                </li>
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.1.0
                </li>
                <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                  1.0.0
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex text-[#fff]">
          <div
            className="relative"
            onMouseOver={() => setDropdown4(true)}
            onMouseLeave={() => setDropdown4(false)}
          >
            <FaGithub className="w-[25px] h-[25px] mt-[3px]" />
            <ul
              className={`absolute right-0 w-[20rem] bg-[#fff] dark:bg-[#000] py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                dropdown4 ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                Release Notes
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
                Docs Repo
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Netcode for GameObjects Repo
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Multiplayer Community Contributions              
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Boss Room Repo
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Bitesize Samples Repo
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Contribution Guide
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Markdown Template
              </li>
            </ul>
          </div>
          <div
            className="relative"
            onMouseOver={() => setDropdown5(true)}
            onMouseLeave={() => setDropdown5(false)}
          >
            <MdMessage className="w-[25px] h-[25px] mt-[3px] ml-[20px]" />
            <ul
              className={`absolute right-[-3rem] bg-[#fff] dark:bg-[#000] w-[15rem] py-2 mt-2 rounded-lg shadow-xl top-[2rem] ${
                dropdown5 ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Product Roadmap
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Discord
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Unity Multiplayer Forum
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Netcode for GameObjects Forum
              </li>
              <li className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000]">
              Unity Transport Forum
              </li>
            </ul>
          </div>
          <div>
            {
              theme === "light" ? <CiDark className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]" onClick={() => setTheme('dark')} /> : <CiDark className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]" onClick={() => setTheme('light')}/>  
            }
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className="text-[#000]" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-[10rem] dark:bg-[#444950] dark:text-[#fff] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#fff]"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
