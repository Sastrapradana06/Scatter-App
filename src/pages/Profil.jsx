import "../App.css";
import { DataUser } from "../Data/data-user";
import AvatarProfil from "../Profil/Avatar-Profil";

export default function Profil() {
  const user = DataUser;
  console.log(user);
  return (
    <div className="text-white w-full h-max ">
      <div className="section-atas">
        <div className="w-full h-[130px] bg-[#138fdc] border-1 "></div>
        <div className="w-full flex justify-between p-3">
            {AvatarProfil(user)}
            <div className="border w-max p-2 rounded-2xl relative right-0">
            <p>Edit profil</p>
            </div>
        </div>
      </div>
      <div className="section-tengah w-[90%] m-auto">
        <div className="">
            <h1 className="text-[1.2rem]">{user.name}</h1>
            <p className="text-gray-500 text-[.9rem]">{user.username}</p>
        </div>
        <div className="mt-2">
            <span>{user.bio}</span>
        </div>
        <div className="mt-2 text-[.9rem]">
            <div className="mb-3 text-gray-400">
                <span></span>
                <p>Bergabung Febuari 2023</p>
            </div>
            <div className="flex gap-4">
                <p>{user.mengikuti} <span className="text-gray-400">Mengikuti</span></p>
                <p>{user.pengikut} <span className="text-gray-400">Pengikut</span></p>
            </div>
        </div>
      </div>
    </div>
  );
}
