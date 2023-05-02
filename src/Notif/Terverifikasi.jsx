import { Link } from "react-router-dom";

export default function Terverifikasi() {
    return (
        <div className="w-[100%] h-[75%] flex flex-col justify-center items-center m-auto">
            <div className="w-[90%] ">
                <div className="text-[1.6rem]">
                    <p>Belum ada apa-apa di sini</p>
                </div>
                <div className="mt-2 text-gray-500 text-[.9rem]">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat sapiente rem ipsum.<Link className="text-blue-700 font-[550]">Pelajari lebih lanjut</Link></p>
                </div>
                <div className="mt-3 text-gray-500 text-[.9rem]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit perspiciatis aperiam consequatur provident magnam, molestias autem..</p>
                </div>
            </div>
            <div className="w-[90%] mt-4">
                <div className="w-[100%] text-black font-[600]">
                    <button className="w-[95%] block m-auto bg-slate-100 rounded-2xl h-[40px]">Berlangganan</button>
                </div>
                <div className="mt-6 text-center text-[.9rem]">
                    <p>Rp 165.000.00/1 bulan</p>
                </div>
            </div>
        </div>
    )
}