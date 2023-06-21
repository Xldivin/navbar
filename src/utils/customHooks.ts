import { useState } from 'react';

export const customHooks = () => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const versionTitle='version';
    const githubTitle='GitHub';
    const communityTitle='Community';
    const [selectedVersion, setSelectedVersion] = useState("1.5.1");
    const [selectedVersion2, setSelectedVersion2] = useState("2.0.0");
    const [selectedVersion3, setSelectedVersion3] = useState("2.0.0-pre");
    const [dropdownTransport, setdropdownTransport] = useState(false);
    const [dropdownMultiplayer, setdropdownMultiplayer] = useState(false);
    const [dropdownGameObject, setdropdownGameObject] = useState(false);
    const [dropdownGithub, setdropdownGithub] = useState(false);
    const [dropdownCommunity, setdropdownCommunity] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleVersionClick2 = (version: string) => {
      setSelectedVersion2(version);
      setDropdown2(false);
    };
    const openMenu = () => {
      setMobileMenu(true);
    };
    const closeMenu = () => {
      setMobileMenu(false);
    };
    const handleVersionClick3 = (version: string) => {
      setSelectedVersion3(version);
      setDropdown3(false);
    };
  
    const handleDropdownClick = (dropdownName: string) => {
      switch (dropdownName) {
        case "dropdownTransport":
          setdropdownTransport(!dropdownTransport);
          break;
        case "dropdownMultiplayer":
          setdropdownMultiplayer(!dropdownMultiplayer);
          break;
        case "dropdownGameObject":
          setdropdownGameObject(!dropdownGameObject);
          break;
          case "dropdownGithub":
            setdropdownGithub(!dropdownGithub);
            break;
            case "dropdownCommunity":
          setdropdownCommunity(!dropdownCommunity);
          break;
        default:
          break;
      }
    };
  
    const handleVersionClick = (version: string) => {
      setSelectedVersion(version);
      setDropdown1(false);
    };
  return {
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
  };
};
