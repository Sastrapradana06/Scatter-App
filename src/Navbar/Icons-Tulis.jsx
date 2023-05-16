// import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function IconsTulis() {
  return (
    <Link to="tulis-tweet">
      <div className="  w-full text-end h-[70px] bg">
        <button className="w-[60px] h-[60px] rounded-full bg-[#008cff] mr-4 hover:bg-[#067cdc] transition-all duration-300 flex justify-center items-center">
          <span>
            <AiOutlinePlus size={30} />
          </span>
        </button>
      </div>
    </Link>
  );
}
