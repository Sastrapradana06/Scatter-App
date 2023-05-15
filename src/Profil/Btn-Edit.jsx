import { Link } from "react-router-dom";
import { useNavContext } from "../Context/Nav-context";

export default function BtnEdit() {
  const [,dispatch] = useNavContext()
  return (
    <Link to="/profil/edit-profil">
      <div className="border w-max p-2 rounded-2xl relative right-0 hover:bg-[#00a6ff] transition-all duration-300 hover:border-black bg">
        <button onClick={() => dispatch({type: 'NavBawahNonAktif'})}>Edit profil</button>
      </div>
    </Link>
  );
}
