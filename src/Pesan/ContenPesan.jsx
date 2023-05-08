import { useNavContext } from "../Context/Nav-context"

export default function ContenPesan() {
    const [state] = useNavContext()
    return (
        <div className={`${state.contenUtama} w-[100%] mt-4 h-[90vh] flex justify-center items-center`}>
            <div className="w-[85%] p-4">
                <div className="text-[1.5rem] ">
                    <h1>Selamat datang di</h1>
                    <h1>kotak masuk Anda!</h1>
                </div>
                <div className="mt-2 text-[.9rem] text-gray-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis odit delectus quisquam.</p>
                </div>
                <div className="mt-6">
                    <button className="w-[130px] h-[45px] rounded-2xl bg-[#038ff3] hover:bg-[#0172c3] duration-300 transition-all">Tulis Pesan</button>
                </div>
            </div>
        </div>
    )
}