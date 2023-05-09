
import { redirect } from "react-router-dom";
import { useEditProfilContext } from "../Context/EditProfil-context";
import EditContent from "../Edit-Profil/Edit-Content";
import { IconsClose } from "../Utils/Icons";


export default function EditProfil() {
    const [state, dispatch] = useEditProfilContext()

    function edit(event) {
        event.preventDefault()
        dispatch({
            type: 'EditDataUser',
            payload: 
                {
                    avatar: state.avatar,
                    name: state.name,
                    username: state.username,
                    bio: state.bio,
                    mengikuti: state.mengikuti,
                    pengikut: state.pengikut,
                }
        })
        
        return redirect("/profil")
    }

    return (
        <div className="w-full h-[100vh]  text-white p-3 mb-[300px]">
            <div className="nav w-full m-auto h-[50px] border-b-[3px] border-[#4d4c4c37] flex justify-between items-center p-1">
                <div className="flex gap-10 text-[1.3rem]">
                    <IconsClose />
                    <p>Edit profil</p>
                </div>
            </div>
            <form onSubmit={edit}>
                <EditContent />
                <div className="m-auto border w-max p-2 mt-4 rounded-2xl hover:bg-[#008cff] transition-all duration-300 text-[.9rem]">
                        <button type="submit">Simpan</button>
                </div>
            </form>
        </div>
    )
}