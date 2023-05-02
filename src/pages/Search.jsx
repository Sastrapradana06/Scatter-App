import ContenTweet from "../Search/Conten";
import Nav from "../Utils/Nav";
import ContenTerkini from "../Search/Terkini";

export default function Search() {
  return (
    <div className="w-full h-max text-white">
      <Nav />
      <ContenTweet />
      <ContenTerkini />
    </div>
  );
}
