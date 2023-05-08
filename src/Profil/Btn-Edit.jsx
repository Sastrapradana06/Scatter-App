import { Link } from "react-router-dom";

export default function BtnEdit() {
  return (
    <Link to="/profil/edit-profil">
      <div className="border w-max p-2 rounded-2xl relative right-0">
        <button>Edit profil</button>
      </div>
    </Link>
  );
}
