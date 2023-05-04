import '../App.css'
export default function BtnNavigasi() {
    return (
        <div className="flex justify-around items-center w-full text-[.9rem] text-gray-400">
            <button className="p-2 w-max h-full border-aktif">
                <p>Tweet</p>
            </button>
            <button className="p-2 w-max h-full">
                <p>Tweet & balasan</p>
            </button>
            <button className="p-2 w-max h-full">
                <p>Media</p>
            </button>
            <button className="p-2 w-max h-full">
                <p>Suka</p>
            </button>
        </div>
    )
}