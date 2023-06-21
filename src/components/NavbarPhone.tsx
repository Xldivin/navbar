import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { customHooks } from "@/utils/customHooks";

const NavbarPhone = (props: ITexts & { versions1: string[] } & { versions2: string[] } & {versions3: string[];} & { links: string[] } & { resources: string[] }) => {
  const {
    text1,
    text2,
    text3,
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
    versionTitle,
    githubTitle,
    communityTitle,
    selectedVersion,
    selectedVersion2,
    selectedVersion3,
    dropdownTransport,
    dropdownGameObject,
    dropdownMultiplayer,
    dropdownGithub,
    dropdownCommunity,
    mobileMenu,
    handleVersionClick2,
    openMenu,
    closeMenu,
    handleVersionClick3,
    handleDropdownClick,
    handleVersionClick,
    setdropdownGithub,
    setMobileMenu,
    setdropdownCommunity,
    setdropdownGameObject,
    setdropdownMultiplayer,
    setDropdown1,
    setdropdownTransport,
    setSelectedVersion,
    setSelectedVersion2,
    setSelectedVersion3,
    setDropdown2,
    setDropdown3,
    setDropdown4,
    setDropdown5,
  } = customHooks();
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
