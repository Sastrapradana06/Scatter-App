import Avatar from "../Utils/avatar";
import IconsSetting from "../Utils/icons-setting";
import '../App.css'
import { useNotifContext } from "../Context/Notif-context";

export default function Navbar() {
    const [state, dispatch] = useNotifContext()
    return (
        <div className="">
            <div className="w-[100%] flex justify-between items-center">
                <div className="w-[50%] ml-3 p-1 gap-8 flex items-center">
                    <Avatar />
                    <p className="text-[1.2rem]">Notifikasi</p>
                </div>
                <div className="mr-4 pt-2">
                    <IconsSetting />
                </div>
            </div>
            <div className="w-[100%] mt-6 border-b-2 border-[#1e1d1d] flex justify-around items-center text-[.9rem] text-slate-500">
                <div className={`${state.borderSemua} w-[20%] border-blue-600 flex justify-center`}>
                    <button onClick={() => dispatch({type: 'BorderSemuaAktif'})}>Semua</button>
                </div>
                <div className={`${state.borderTerverifikasi} w-[20%] border-blue-600 flex justify-center`}>
                    <button onClick={() => dispatch({type: 'BorderTerverifikasiAktif'})}>Terverifikasi</button>
                </div>
                <div className={`${state.borderSebutan} w-[20%] border-blue-600 flex justify-center`}>
                    <button onClick={() => dispatch({type: 'BorderSebutanAktif'})}>Sebutan</button>
                </div>
            </div>
        </div>
    )
}