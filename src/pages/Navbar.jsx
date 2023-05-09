import { useNavContext } from "../Context/Nav-context";
import IconsHome from "../Navbar/Icons-Home";
import IconsNotif from "../Navbar/Icons-Notif";
import IconsPesan from "../Navbar/Icons-Pesan";
import IconsSearch from "../Navbar/Icons-Seacrh";
import IconsTulis from "../Navbar/Icons-Tulis";
import "../font.css";

export function Navbar() {
  const [state] = useNavContext()
  return (
    <div className={`${state.statusNavBawah}  w-[100%]  text-white h-max fixed bottom-0 z-10 flex justify-between items-end flex-col`}>
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
