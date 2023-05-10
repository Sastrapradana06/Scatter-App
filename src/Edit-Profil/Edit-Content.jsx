import { useDataUserContext } from "../Context/DataUser";

export default function EditContent() {
  const [state, dispatch] = useDataUserContext();

  return (
    <div className="w-full h-max p-1">
      <div className="avatar w-full  flex flex-col justify-center gap-4 items-center mt-4">
        <img src={state.avatar} alt="" className="w-[100px] h-[100px] border border-[black] rounded-full object-cover" />
        <div className="w-[90%] text-[.8rem] ">
          <p className="text-gray-400">Masukkan url Avatar</p>
          <input
            type="text"
            value={state.avatar}
            onChange={(e) => dispatch({ type: "EditAvatar", payload: e.target.value })}
            className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] mt-1 p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
          />
        </div>
      </div>
      <div className="name avatar w-[90%] m-auto  flex flex-col  mt-4  text-[.8rem]">
        <p className="text-gray-400">Name</p>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: "EditName", payload: e.target.value })}
          className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
        />
      </div>
      <div className="username avatar w-[90%] m-auto  flex flex-col  mt-4  text-[.8rem]">
        <p className="text-gray-400">Username</p>
        <input
          type="text"
          value={state.username}
          onChange={(e) => dispatch({ type: "EditUsername", payload: e.target.value })}
          className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
        />
      </div>
      <div className="bio avatar w-[90%] m-auto  flex flex-col  mt-4  text-[.8rem]">
        <p className="text-gray-400">Bio</p>
        <input
          type="text"
          value={state.bio}
          onChange={(e) => dispatch({ type: "EditBio", payload: e.target.value })}
          className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
        />
      </div>
      <div className="mengikuti avatar w-[90%] m-auto  flex flex-col  mt-4  text-[.8rem]">
        <p className="text-gray-400">Mengikuti</p>
        <input
          type="text"
          value={state.mengikuti}
          onChange={(e) => dispatch({ type: "EditMengikuti", payload: e.target.value })}
          className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
        />
      </div>
      <div className="pengikut avatar w-[90%] m-auto  flex flex-col  mt-4  text-[.8rem]">
        <p className="text-gray-400">Pengikut</p>
        <input
          type="text"
          value={state.pengikut}
          onChange={(e) => dispatch({ type: "EditPengikut", payload: e.target.value })}
          className="w-full h-[30px] bg-transparent border-b-[1px] border-[gray] p-2 focus:outline-none focus:border-[#0088ff] focus:border-b-2"
        />
      </div>
    </div>
  );
}
