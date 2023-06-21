import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { customHooks } from "@/utils/customHooks";
import { useTheme } from "next-themes";

const NavbarPhone: React.FC<ITexts & {
  versions1: string[];
  versions2: string[];
  versions3: string[];
  links: string[];
  resources: string[];
  mobileMenu: boolean;
  closeMenu: () => void;
}> = (props) => {
  const {
    text1,
    text2,
    text3,
    versions1,
    versions2,
    versions3,
    links,
    resources,
    mobileMenu,
    closeMenu,
  } = props;
  const {
    versionTitle,
    githubTitle,
    communityTitle,
    dropdownTransport,
    dropdownGameObject,
    dropdownMultiplayer,
    dropdownGithub,
    dropdownCommunity,
    handleDropdownClick,
    handleVersionClick,
  } = customHooks();
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex lg:hidden h-screen w-screen absolute left-0 top-0">
      <div className="h-screen w-4/5 bg-black relative">
        <div className="flex justify-between p-4">
          <a href="#" className="flex">
            <Image src={Logo} alt="logo" />
            <p className="text-[#fff] text-md font-bold mt-[15px] hover:text-blue-500 cursor-pointer overflow-hidden whitespace-nowrap text-overflow-ellipsis">
              {text1}
            </p>
          </a>
          <div className="flex">
            {theme === "light" ? (
              <Icon
                icon="bi:sun color='white'"
                className="w-[25px] h-[25px] mt-[15px] ml-[20px] mr-[10px]"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <Icon
                icon="fa6-regular:moon"
                className="w-[25px] h-[25px] mt-[13px] ml-[20px] mr-[10px]"
                onClick={() => setTheme("light")}
              />
            )}
          </div>
          <Icon
            icon="system-uicons:cross"
            color="white"
            width="48"
            onClick={() => closeMenu()}
          />
        </div>
        <div className="px-4">
          <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {text2}
          </p>
          <div className="block border-b border-white">
            <div
              className=" flex justify-between"
              onClick={() => handleDropdownClick("dropdownGameObject")}
            >
              <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
                Version
              </p>
              <Icon
                icon="ri:arrow-drop-down-line"
                color="white"
                width="48"
                className={`transition-transform duration-200 transform ${
                  dropdownGameObject ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownGameObject && (
              <ul>
                {versions1.map((version) => (
                  <li
                    key={version}
                    className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white cursor-pointer"
                    onClick={() => handleVersionClick(version)}
                  >
                    {version}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {text2}
          </p>
          <div className="block border-b border-white">
            <div
              className=" flex justify-between"
              onClick={() => handleDropdownClick("dropdownTransport")}
            >
              <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
                {versionTitle}
              </p>
              <Icon
                icon="ri:arrow-drop-down-line"
                color="white"
                width="48"
                className={`transition-transform duration-200 transform ${
                  dropdownTransport ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownTransport && (
              <ul>
                {versions2.map((version) => (
                  <li
                    key={version}
                    className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"
                    onClick={() => handleVersionClick(version)}
                  >
                    {version}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
            {text3}
          </p>
          <div className="block border-b border-white">
            <div
              className=" flex justify-between"
              onClick={() => handleDropdownClick("dropdownMultiplayer")}
            >
              <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
                {versionTitle}
              </p>
              <Icon
                icon="ri:arrow-drop-down-line"
                color="white"
                width="48"
                className={`transition-transform duration-200 transform ${
                  dropdownMultiplayer ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownMultiplayer && (
              <ul>
                {versions3.map((version) => (
                  <li
                    key={version}
                    className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"
                    onClick={() => handleVersionClick(version)}
                  >
                    {version}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="block">
            <div
              className=" flex"
              onClick={() => handleDropdownClick("dropdownGithub")}
            >
              <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
                {githubTitle}
              </p>
              <Icon
                icon="ri:arrow-drop-down-line"
                color="white"
                width="48"
                className={`mt-[-5px] transition-transform duration-200 transform ${
                  dropdownGithub ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownGithub && (
              <ul>
                {links.map((link) => (
                  <li
                    key={link}
                    className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"
                    onClick={() => handleVersionClick(link)}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="block">
            <div
              className=" flex"
              onClick={() => handleDropdownClick("dropdownCommunity")}
            >
              <p className="text-[#fff] text-md mt-[7px] hover:text-blue-500 cursor-pointer">
                {communityTitle}
              </p>
              <Icon
                icon="ri:arrow-drop-down-line"
                color="white"
                width="48"
                className={`mt-[-5px] transition-transform duration-200 transform ${
                  dropdownCommunity ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownCommunity && (
              <ul>
                {resources.map((resource) => (
                  <li
                    key={resource}
                    className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 text-white"
                    onClick={() => handleVersionClick(resource)}
                  >
                    {resource}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div
        className="h-screen w-1/5 bg-black brightness-80 opacity-80"
        onClick={() => closeMenu()}
      />
    </div>
  );
};

export default NavbarPhone;
