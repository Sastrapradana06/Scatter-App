import ContenInput from "../Pesan/Conten-input";
import ContenPesan from "../Pesan/ContenPesan";
import NavPesan from "../Pesan/Nav";


export default function Pesan() {
  return (
    <div className="w-[100%] text-white ">
      <NavPesan />
      <ContenPesan />
      <ContenInput />
    </div>
  );
}
