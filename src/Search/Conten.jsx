import { useNavContext } from "../Context/Nav-context";
import Tweet from "./tweet";

export default function ContenTweet() {
  const [state] = useNavContext()
  return (
    <div className={`${state.contenUtama} w-[100%] h-max mt-1 p-2 mb-[60px]`}>
      <p>Trend untuk Anda</p>
      <Tweet />
      <div className="text-[.9rem] mt-4 text-[#0051ff]">
        <p>Tampilan lebih banyak</p>
      </div>
    </div>
  );
}
