import { useNavContext } from "../Context/Nav-context";
import AvatarSidebar from "../Sidebar/Avatar-Sidebar";
import BtnCloseSidebar from "../Sidebar/BtnClose-Sidebar";
import "../App.css";
// import { DataUser } from "../Data/data-user";
import { useDataUserContext } from "../Context/DataUser";
export function Sidebar() {
  const [state] = useNavContext();
  const [item] = useDataUserContext();
  const user = item.dataUser;

  return (
    <div className={`${state.statusSidebar} sidebar fixed top-0 w-[350px] lg:w-[400px] h-[100%] bg-[black] lg:inline-block border-r border-[#ffffff56] p-[20px] z-20 text-white`}>
      <div className="w-[95%] p-1 h-[200px] flex flex-col gap-4 border-1  m-auto">
        <div className="flex justify-between items-center w-[100%] h-[60px] ">
          <AvatarSidebar />
          <BtnCloseSidebar />
        </div>
        <div className="">
          <h1>{user.name}</h1>
          <p className="text-[.8rem] text-gray-500">@{user.username}</p>
        </div>
        <div className=" flex gap-4 items-center text-[.8rem]">
          <p>
            {user.mengikuti} <span className="text-gray-500">Mengikuti</span>
          </p>
          <p>
            {user.pengikut} <span className="text-gray-500 ">Pengikut</span>
          </p>
        </div>
      </div>
      <div className="w-[95%] pb-10 pt-6 flex items-center border-1 m-auto mt-2">
        <div className="w-[80%] h-[300px] flex flex-col gap-6 text-[1.3rem] justify-center">
          <div className="flex gap-8 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </span>
            <p>Profil</p>
          </div>
          <div className="flex gap-8">
            <span className="p-1 bg-[#1278e5] flex items-center justify-center rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </span>
            <p>Scatter Blue</p>
          </div>
          <div className="flex gap-8">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </span>
            <p>Topik</p>
          </div>
          <div className="flex gap-8">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </span>
            <p>Markah</p>
          </div>
          <div className="flex gap-8">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
            </span>
            <p>Daftar</p>
          </div>
          <div className="flex gap-8">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
                <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
              </svg>
            </span>
            <p>Scatter Circle</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-10 m-auto gap-6 flex flex-col">
        <div className="flex w-full justify-between">
          <p>Alat Profesional</p>
          <span></span>
        </div>
        <div className="">
          <p>Pengaturan & Dukungan</p>
        </div>
      </div>
    </div>
  );
}
