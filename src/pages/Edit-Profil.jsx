import { redirect } from "react-router-dom";
import { useDataUserContext } from "../Context/DataUser";
import EditContent from "../Edit-Profil/Edit-Content";
import { IconsClose } from "../Utils/Icons";
import Alert from "../Utils/Alert";

export default function EditProfil() {
  const [state, dispatch] = useDataUserContext();

  function edit(event) {
    event.preventDefault();
    dispatch({
      type: "EditDataUser",
      payload: {
        avatar: state.avatar,
        name: state.name,
        username: state.username,
        bio: state.bio,
        mengikuti: state.mengikuti,
        pengikut: state.pengikut,
      },
    });

    return redirect("/profil");
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
        {Alert('Profil Berhasil diubah', 'profil')}
        <div className="m-auto border w-max p-2 mt-4 rounded-2xl hover:bg-[#008cff] hover:border hover:border-black transition-all duration-300 text-[.9rem]">
          <button type="submit" onClick={() => dispatch({ type: "AlertTampil" })}>
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
