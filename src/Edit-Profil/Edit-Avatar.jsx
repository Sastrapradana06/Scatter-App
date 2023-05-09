import { useEditProfilContext } from "../Context/EditProfil-context";

export default function EditAvatar() {
    const [state] = useEditProfilContext()
  return (
    <div className="avatar w-full  flex flex-col justify-center gap-4 items-center mt-4">
      <img src={state.avatar} alt="" className="w-[100px] h-[100px] border rounded-full object-cover" />
      <div className="w-[90%] text-[.8rem] ">
        <p className="text-gray-400">Masukkan url Avatar</p>
        <input 
            type="text"
            value={state.avatar}
            className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] mt-1 p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2" 
        />
      </div>
    </div>
  );
}
