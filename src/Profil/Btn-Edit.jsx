import { Link } from "react-router-dom";
import { useNavContext } from "../Context/Nav-context";

export default function BtnEdit() {
  const [,dispatch] = useNavContext()
  return (
    <Link to="/profil/edit-profil">
      <div className="border w-max p-2 rounded-2xl relative right-0">
        <button onClick={() => dispatch({type: 'NavBawahNonAktif'})}>Edit profil</button>
      </div>
    </Link>
  );
}
