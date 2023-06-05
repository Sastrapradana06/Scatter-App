import React, { useState, useEffect } from 'react';
import Avatar from "../Utils/avatar";
import "../font.css";
import '../App.css'

export function NavHome() {
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
    <div className={`${visible ? '' : 'hidden'} lg:w-[69%]  nav-home fixed z-10 text-white top-0 w-[100%] m-auto h-max bg-black -mt-1 p-1 font-saya`}>
      <div className="nav-atas h-[40px] w-[95%] m-auto mt-1 text-white flex justify-between items-center">
        <Avatar />
        <div className="">
          <p className="font-utama tracking-wider text-xl">Scatter</p>
        </div>
        <div className="">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(34, 132, 175)" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </span>
        </div>
      </div>
      <div className=" w-[70%] m-auto h-[30px] mt-4 flex justify-between items-center box-border text-[.9rem]">
        <div className="text-slate-500">
            <button className={`border-aktif`}>Untuk Anda</button>
        </div>
        <div className="text-slate-500">
        <button className={`border-aktif`}>Mengikuti</button>
        </div>
      </div>
    </div>
  );
}
