import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsDelete, IconsLove, IconsRetweet, IconsSosial, IconsViews } from "../Utils/Icons";
import "../font.css";
import Avatar from "./Avatar";
import "../App.css";
import { useDataUserContext } from "../Context/DataUser";

export default function TweetUserr() {
  const [, dispatch] = useHomeContext();
  const [state] = useDataUserContext();
  const user = state.dataUser;

  return (
    <div className="flex flex-col mt-24 -mb-[100px] h-max justify-around">
      {state.dataTweet.map((users) => {
        return (
          <div className="w-[100%] h-max p-1 flex justify-around font-saya text-white " key={users.like}>
            {Avatar(user)}
            {/* content */}
            <div className="w-[85%] mt-1 h-max">
              <div className="username flex w-[100%] gap-1  text-[.8rem]">
                <p className="text-[9.rem]">{user.name}</p>
                <p className="text-slate-500">@{user.username}</p>
                <p className="text-slate-500">. Baru saja</p>
                {IconsDelete(users)}
              </div>
              <div className="status">
                <p className="font-status text-[.9rem]">{users.status}</p>
              </div>
              {users.photo === "" ? "" : <img src={users.photo} alt="" className="bg-center object-cover w-[100%] h-[100%] rounded-2xl mt-2" />}
              <div className="mt-2 text-[.7rem] flex w-[95%] justify-around cursor-pointer">
                {/* coment */}
                <div className="flex items-center gap-1">
                  <button onClick={() => dispatch({ type: "Coment" })}>
                    <IconsComent />
                  </button>
                  <p className=" text-slate-500">{users.coment}</p>
                </div>
                {/* retwet */}
                <div className="flex items-center gap-1">
                  {IconsRetweet(users)}
                  <p className=" text-slate-500">{users.rettwet}</p>
                </div>
                {/* like */}
                <div className="flex items-center gap-1">
                  {IconsLove(users)}
                  <p className=" text-slate-500">{users.likes}</p>
                </div>
                {/* tayangan */}
                <div className="flex items-center gap-1">
                  <span>
                    <IconsViews />
                  </span>
                  <p className=" text-slate-500 ">{users.penayangan}</p>
                </div>
                {/* btn all */}
                <div className="flex items-center gap-1">
                  <span>
                    {/* <IconsSosial /> */}
                    {IconsSosial(users)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
