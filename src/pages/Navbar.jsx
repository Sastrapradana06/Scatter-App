import { useNavContext } from "../Context/Nav-context";
import IconsHome from "../Navbar/Icons-Home";
import IconsNotif from "../Navbar/Icons-Notif";
import IconsPesan from "../Navbar/Icons-Pesan";
import IconsSearch from "../Navbar/Icons-Seacrh";
import IconsTulis from "../Navbar/Icons-Tulis";
import "../font.css";
import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [state] = useNavContext()
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`${state.statusNavBawah} ${visible ? '' : 'hidden'}  w-[100%]  text-white h-max fixed bottom-0 z-10 flex justify-between items-end flex-col`}>
      <IconsTulis />
      <div className="w-full h-[70px] flex justify-between items-center bg-black p-8 nav-bawah">
        <IconsHome />
        <IconsSearch />
        <IconsNotif />
        <IconsPesan />
      </div>
    </div>
  );
}
