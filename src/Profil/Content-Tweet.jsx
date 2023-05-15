import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsLove, IconsSosial, IconsTerRetweet, IconsVerified, IconsViews } from "../Utils/Icons";
import AvatarTweet from "./AvatarTweet";

export default function ContenTweet() {
  const [state] = useHomeContext();
  return state.getRetweet.map((e) => {
    return (
      <div className="flex gap-3 mt-3 w-[95%] m-auto mb-6 bg" key={e.item.coment}>
        {/* <img src={e.item.avatar} alt="" className="w-[50px] h-[50px] rounded-full object-cover" /> */}
        {AvatarTweet(e.item)}
        <div className="flex flex-col gap-1 w-[85%] text-[.7rem]">
          <div className="flex gap-2 flex-wrap items-center w-full">
            <p className="font-[500] text-[.9rem]">{e.item.user}</p>
            {e.item.verifaed ? <IconsVerified /> : ""}
            <p className="text-gray-400">@{e.item.name}</p>
            <p className="text-gray-400">. {e.item.waktu}</p>
          </div>
          <div className="text-[.9rem]">
            <p>{e.item.status}</p>
          </div>
          {!e.item.photo ? '' : (
            <img src={e.item.photo} alt="" className="bg-center object-cover w-[100%] h-[100%] rounded-2xl mt-2" />
          )}
          {/* <img src={e.item.photo} alt="" className="w-[100%] h-[350px] rounded-xl object-cover " /> */}
          <div className="flex justify-around items-center text-[.7rem] text-gray-400">
            <div className="flex gap-1">
              <IconsComent />
              <span>{e.item.coment}</span>
            </div>
            <div className="flex gap-1">
              {IconsTerRetweet(e)}
              <span>{e.item.rettwet}</span>
            </div>
            <div className="flex gap-1">
              {IconsLove(e.item)}
              <span>{e.item.likes}</span>
            </div>
            <div className="flex gap-1">
              <IconsViews />
              <span>{e.item.penayangan}</span>
            </div>
            <div className="flex gap-1">{IconsSosial(e)}</div>
          </div>
        </div>
      </div>
    );
  });
}
