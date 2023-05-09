
import { useEditProfilContext } from "../Context/EditProfil-context";


export default function AvatarProfil() {
  const [item] = useEditProfilContext()
  const user = item.dataUser
  return (
    <div className=" -mt-12 ml-2 rounded-full">
      <img src={user.avatar} alt="" className={`rounded-full w-[70px] h-[70px] border-[#8080806e] object-cover`} />
    </div>
  );
}
