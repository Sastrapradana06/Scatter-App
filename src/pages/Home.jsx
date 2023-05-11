import { useDataUserContext } from "../Context/DataUser";
import { NavHome } from "../Home/Nav";
import TweetUserr from "../Home/Tweet-User";
import ContentAnda from "../Home/Untuk-Anda";

export default function Home() {
    const [state] = useDataUserContext()
    const tweet = state.dataTweet
    return (
        <div className=" mb-[150px]">
            <NavHome />
            {tweet.length > 0 ? <TweetUserr /> : ''}
            <ContentAnda />
        </div>
    )
}