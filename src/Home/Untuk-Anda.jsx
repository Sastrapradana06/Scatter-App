import { dataTwett } from "../Data/data-twett";
import "../font.css";
import Avatar from "./Avatar";
import BtnAksi from "./Btn-Aksi";
import ImageStatus from "./Image-Status";
import Status from "./Status";
import Username from "./Username";

export default function ContentAnda() {
  return (
    <div className="flex flex-col mt-24 mb-[140px] h-max justify-around gap-20">
      {dataTwett.map((users) => {
        return (
          <div className="w-[100%] h-max p-1 flex justify-around font-saya text-white">
            {Avatar(users)}
            {/* content */}
            <div className="w-[85%] h-[350px] border-black">
              {Username(users)}
              {Status(users)}
              {ImageStatus(users)}
              {BtnAksi(users)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
