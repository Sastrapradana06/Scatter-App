import { DataUser } from "../Data/data-user";
import Avatar from "../Utils/avatar";

export default function AvatarProfil() {
    const user = DataUser
  return (
    <div className=" -mt-12 ml-2 rounded-full">
      <img src={user.avatar} alt="" className={`rounded-full w-[70px] h-[70px] border-[#8080806e] object-cover`} />
    </div>
  );
}
