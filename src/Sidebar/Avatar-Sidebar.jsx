import { Link } from "react-router-dom";
import { useNavContext } from "../Context/Nav-context";
import { useDataUserContext } from "../Context/DataUser";

export default function AvatarSidebar() {
  const [, dispatch] = useNavContext();
  const [item] = useDataUserContext();
  const user = item.dataUser;
  return (
    <Link to="profil" onClick={() => dispatch({ type: "SidebarNonAktif" })}>
      <img src={user.avatar} alt="" className={`rounded-full w-[50px] h-[50px] border-[#8080806e] object-cover`} />
    </Link>
  );
}
