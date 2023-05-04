import "../App.css";
import { DataUser } from "../Data/data-user";
import AvatarProfil from "../Profil/Avatar-Profil";
import BtnNavigasi from "../Profil/Btn-Navigasi";
import ContenProfil from "../Profil/Content-Profil";

export default function Profil() {
  const user = DataUser;
  console.log(user);
  return (
    <div className="text-white w-full h-max ">
      <div className="section-atas">
        <div className="w-full h-[130px] bg-[#138fdc] border-1 "></div>
        <div className="w-full flex justify-between p-3">
          <AvatarProfil />
          <div className="border w-max p-2 rounded-2xl relative right-0">
            <button>Edit profil</button>
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
            <p>
              {user.mengikuti} <span className="text-gray-400">Mengikuti</span>
            </p>
            <p>
              {user.pengikut} <span className="text-gray-400">Pengikut</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 text-white p-1">
        <BtnNavigasi />
      </div>
      <div className="w-full mt-2">
        <div className="text-gray-400 text-[.8rem] w-max">
          <p className="ml-12 flex gap-2">
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
          </span>
            Anda me-Retweet</p>
        </div>
      </div>
      <div className=" w-full p-1 mb-[60px]">
        <ContenProfil />
      </div>
    </div>
  );
}
