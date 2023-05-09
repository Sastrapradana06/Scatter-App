import { useNavContext } from "../Context/Nav-context"
import { useEditProfilContext } from "../Context/EditProfil-context";

export default function Avatar() {
    const [state, dispatch] = useNavContext()
    const [item] = useEditProfilContext()
    const user = item.dataUser
    return (
        <button className={`${state.avatar}`} onClick={() => dispatch({type: 'SidebarAktif'})}>
            <img src={user.avatar} alt="" className={`rounded-full w-[30px] h-[30px] border-[#8080806e] object-cover`}/>
        </button>
    )
} 