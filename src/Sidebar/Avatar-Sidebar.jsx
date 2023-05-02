import { Link } from "react-router-dom";
import { useNavContext } from "../Context/Nav-context";
import { DataUser } from "../Data/data-user";

export default function AvatarSidebar() {
  const [,dispatch] = useNavContext()
  const user = DataUser
  return (
    <Link to='profil' onClick={() => dispatch({type: 'SidebarNonAktif'})}>
      <img src={user.avatar} alt="" className="w-[50px] h-[50px] rounded-full object-cover border border-[#8080806e]" />
    </Link>
  );
}
