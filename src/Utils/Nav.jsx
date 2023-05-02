import Avatar from "./avatar";
import IconsSetting from "./icons-setting";
import Input from "./input";
import "../App.css";
import BtnClose from "./btn-close";

export default function Nav() {
  return (
    <div className="w-full h-[50px] flex justify-around items-center m-auto border-nav p-1">
      <Avatar />
      <BtnClose />
      <Input />
      <IconsSetting />
    </div>
  );
}
