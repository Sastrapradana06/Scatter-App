import { Link } from "react-router-dom";
import { useDataUserContext } from "../Context/DataUser";
import { useNavContext } from "../Context/Nav-context";
export default function Alert(pesan, url) {
  const [state, dispatch] = useDataUserContext();
  const [, dispatch2] = useNavContext();

  function closePage() {
    dispatch({ type: "AlertClose" });
    dispatch2({ type: "NavBawahAktif" });
  }

  return (
    <div className={`${state.alert} w-full lg:w-[70%] h-[100%] top-0 fixed z-30 text-white flex justify-center items-center flex-col gap-3 duration-300 transition-all`}>
      <div className="w-[80%] h-[150px] border border-black flex flex-col gap-4 justify-center items-center bg-gray-500 rounded-xl lg:w-[50%]">
        <div className="flex gap-1 text-[1.1rem]">
          <span>✅</span>
          <p>{pesan}</p>
        </div>
        <div className="text-[.8rem]">
          <Link to={`/${url}`}>
            <button className="border border-black w-[80px] h-[30px] text-center rounded-xl hover:bg-[#00a2ff] duration-300" onClick={closePage}>
              Keluar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
