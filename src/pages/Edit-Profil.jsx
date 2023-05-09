import EditAvatar from "../Edit-Profil/Edit-Avatar";
import { IconsClose } from "../Utils/Icons";

export default function EditProfil() {
    return (
        <form>
        <div className="w-full h-[100vh] border text-white p-3">
            <div className="nav w-full m-auto h-[50px] border flex justify-between items-center p-1">
                <div className="flex gap-10 text-[1.3rem]">
                    <IconsClose />
                    <p>Edit profil</p>
                </div>
                <div className="">
                    <button type="submit">Simpan</button>
                </div>
            </div>
            <div className="w-full border h-[300px]">
                    <EditAvatar />
            </div>
        </div>
        </form>
    )
}