import { useState } from 'react';

export const customHooks = () => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);

  return {
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
  };
};
