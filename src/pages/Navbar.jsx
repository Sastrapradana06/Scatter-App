import IconsHome from "../Navbar/Icons-Home";
import IconsNotif from "../Navbar/Icons-Notif";
import IconsPesan from "../Navbar/Icons-Pesan";
import IconsSearch from "../Navbar/Icons-Seacrh";
import "../font.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="nav-bawah w-[100%] bg-black text-white h-[50px] fixed bottom-0 z-10 flex justify-center items-center">
      <div className="w-[80%] h-[90%] flex justify-between items-center">
        <IconsHome />
        <IconsSearch />
        <IconsNotif />
        <IconsPesan />
      </div>
    </div>
  );
}
