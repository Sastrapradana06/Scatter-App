import { useNotifContext } from "../Context/Notif-context";
import Navbar from "../Notif/Navbar";


export default function Notif() {
    const [state] = useNotifContext()
    return (
        <div className="w-full h-[100vh] text-white p-1">
            <Navbar />
            {state.contenAktif}
        </div>
    )
}