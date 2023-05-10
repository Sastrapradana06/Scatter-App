import IconsSetting from "../Utils/icons-setting";
import "../App.css";
import { useNotifContext } from "../Context/Notif-context";
import { useDataUserContext } from "../Context/DataUser";

export default function Navbar() {
  const [state, dispatch] = useNotifContext();
  const [item] = useDataUserContext();
  const user = item.dataUser;
  return (
    <div className="">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[50%] ml-3 p-1 gap-8 flex items-center">
          <button className={`${state.avatar}`} onClick={() => dispatch({ type: "SidebarAktif" })}>
            <img src={user.avatar} alt="" className={`rounded-full w-[30px] h-[30px] border-[#8080806e] object-cover`} />
          </button>
          <p className="text-[1.2rem]">Notifikasi</p>
        </div>
        <div className="mr-4 pt-2">
          <IconsSetting />
        </div>
      </div>
      <div className="w-[100%] mt-6 border-b-2 border-[#1e1d1d] flex justify-around items-center text-[.9rem] text-slate-500">
        <div className={` w-[20%] flex justify-center`}>
          <button onClick={() => dispatch({ type: "ContentSemuaAktif" })} className="border-aktif">
            Semua
          </button>
        </div>
        <div className={`w-[20%] border-blue-600 flex justify-center`}>
          <button onClick={() => dispatch({ type: "ContentTerverifikasiAktif" })} className="border-aktif">
            Terverifikasi
          </button>
        </div>
        <div className={`w-[20%] border-blue-600 flex justify-center`}>
          <button onClick={() => dispatch({ type: "ContentSebutanAktif" })} className="border-aktif">
            Sebutan
          </button>
        </div>
      </div>
    </div>
  );
}
