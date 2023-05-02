
import '../App.css'
import { useNavContext } from '../Context/Nav-context'
export default function Input() {
    const [state, dispatch] = useNavContext()
    return (
        <form>
            <input 
                type="text"
                placeholder="Cari di Scatter"
                className={`${state.classInput} w-[250px] h-[35px] rounded-xl p-2 text-[.8rem] cursor-pointer`}
                onClick={() => dispatch({type: 'InputAktif'})}
            />
        </form>
    )
}