// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function IconsTulis() {
  return (
    <Link to="tulis-tweet">
      <div className="  w-full text-end h-[70px]">
        <button className="w-[60px] h-[60px] rounded-full bg-[#008cff] mr-4">
          <p className="text-[2rem]">+</p>
        </button>
      </div>
    </Link>
  );
}
