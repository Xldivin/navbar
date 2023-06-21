import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { customHooks } from "@/utils/customHooks";
import NavbarPhone from "./NavbarPhone";
import SearchComponent from "./SearchComponent";

const Navbar: React.FC<ITexts & {
  versions1: string[];
  versions2: string[];
  versions3: string[];
  links: string[];
  resources: string[];
}> = (props) => {
  const {
    text1,
    text2,
    text3,
    text4,
    versions1,
    versions2,
    versions3,
    links,
    resources,
  } = props;

  const {
    dropdown1,
    dropdown2,
    dropdown3,
    dropdown4,
    dropdown5,
    selectedVersion,
    selectedVersion2,
    selectedVersion3,
    handleVersionClick2,
    openMenu,
    handleVersionClick3,
    handleVersionClick,
    setDropdown1,
    setDropdown2,
    setDropdown3,
    setDropdown4,
    setDropdown5,
  } = customHooks();

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const { theme, setTheme } = useTheme();
  return (
    <nav
      className="relative w-100 items-center flex justify-between bg-black px-0 md:px-4 py-4"
      data-te-navbar-ref
    >
      <div className="flex space-x-[7rem]">
        <div className="flex">
          <div className="flex">
          <AiOutlineMenu
        className="flex lg:hidden mr-2 mt-[2px] w-[30px] h-[25px] text-white"
        onClick={toggleMobileMenu}
        />
            <a href="#" className="flex gap-[10px]">
              <Image src={Logo} alt="logo" />
              <p className="text-[#fff] text-md font-bold mt-[7px] hover:text-blue-500 cursor-pointer">
                {text1}
              </p>
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
                    <li
                      key={version}
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
            <p className="text-[#fff] ml-[23px] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
              {text3}
            </p>
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
                  <li
                    key={version}
                    className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500"
                    onClick={() => handleVersionClick2(version)}
                  >
                    {version}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex border-r-[1px] hidden lg:flex">
            <p className="text-[#fff] ml-[23px] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
              {text4}
            </p>
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
                {versions3.map((version) => (
                  <li
                    key={version}
                    className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500"
                    onClick={() => handleVersionClick3(version)}
                  >
                    {version}
                  </li>
                ))}
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
              {links.map((link) => (
                <li
                  key={link}
                  className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 text-[#000] hover:text-blue-500 dark:hover:bg-[#444950]"
                >
                  {link}
                </li>
              ))}
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
              {resources.map((resource) => (
                <li
                  key={resource}
                  className="flex w-full items-center dark:text-[#fff] px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#444950] text-[#000] hover:text-blue-500"
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex">
            {theme === "light" ? (
              <Icon
                icon="bi:sun"
                className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <Icon
                icon="fa6-regular:moon"
                className="w-[25px] h-[25px] mt-[3px] ml-[20px] mr-[10px]"
                onClick={() => setTheme("light")}
              />
            )}
          </div>
          <SearchComponent/>
        </div>
      </div>

      {/* Mobile */}

      {mobileMenu && (
        <NavbarPhone mobileMenu={mobileMenu} closeMenu={closeMenu} text1={text1} text2={text2} text3={text3} text4={text4} versions1={versions1} versions2={versions2} versions3={versions3} links={links} resources={resources} />
      )}
    </nav>
  );
};

export default Navbar;
