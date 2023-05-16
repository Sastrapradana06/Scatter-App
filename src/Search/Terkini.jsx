import { useNavContext } from "../Context/Nav-context"

export default function ContenTerkini() {
    const [state] = useNavContext()
    return (
        <div className={`${state.contenLainnya} w-[100%] mt-4`}>
            <div className="ml-4 text-[#808080f7] font-[600]">
                <p>Terkini</p>
            </div>
            <div className="m-auto w-[90%] mt-3 text-[.8rem] text-center">
                <p>Anda belum memiliki Riwayat Pencarian</p>
            </div>
        </div>
    )
}