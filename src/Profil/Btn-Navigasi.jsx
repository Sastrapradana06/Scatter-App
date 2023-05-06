import '../App.css'
import { useProfilContext } from '../Context/Profil-context'
export default function BtnNavigasi() {
    const [state, dispatch] = useProfilContext()
    return (
        <div className="flex justify-around items-center w-full text-[.9rem] text-gray-400">
            <button className="p-2 w-max h-full border-aktif" onClick={() => dispatch({type: 'GetTweet'})}>
                <p>Tweet</p>
            </button>
            <button className="p-2 w-max h-full border-aktif" onClick={() => dispatch({type: 'GetTweet&Balasan'})}>
                <p>Tweet & balasan</p>
            </button>
            <button className="p-2 w-max h-full border-aktif" onClick={() => dispatch({type: 'GetMedia'})}>
                <p>Media</p>
            </button>
            <button className="p-2 w-max h-full border-aktif" onClick={() => dispatch({type: 'GetSuka'})}>
                <p>Suka</p>
            </button>
        </div>
    )
}