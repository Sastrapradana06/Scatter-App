import { Link } from "react-router-dom";
import { useDataUserContext } from "../Context/DataUser";
export default function Nav() {
  const [, dispatch] = useDataUserContext();

  return (
    <div
      className="w-full h-[50px]
        flex justify-between items-center p-1"
    >
      <div className="">
        <Link to="/">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="">
        <button className="w-[70px] h-[30px] bg-[#00aeff] rounded-2xl text-[.8rem] hover:bg-[#067cdc] transition-all duration-300" onClick={() => dispatch({ type: "AlertTampil" })}>
          Tweet
        </button>
      </div>
    </div>
  );
}
