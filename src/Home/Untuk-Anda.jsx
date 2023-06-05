import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsViews } from "../Utils/Icons";
import { dataTwett } from "../Data/data-twett";
import "../font.css";
import Avatar from "./Avatar";
import ImageStatus from "./Image-Status";
import Status from "./Status";
import Username from "./Username";
import '../App.css'

export default function ContentAnda() {
  const [, dispatch] = useHomeContext()

  return (
    <div className={`flex flex-col h-max justify-center mt-24`}>
      {dataTwett.map((users) => {
        return (
          <div className="w-[100%] h-max p-1 flex justify-around font-saya text-white" key={users.likes}>
            {Avatar(users)}
            {/* content */}
            <div className="w-[85%] h-max border-black border">
              {Username(users)}
              {Status(users)}
              {ImageStatus(users)}
              <div className="mt-2 text-[.7rem] lg:text-[1rem] flex w-[95%] justify-around cursor-pointer ">
                {/* coment */}
                <div className="flex items-center gap-1">
                  <button onClick={() => dispatch({type: 'Coment'})}><IconsComent /></button>
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
                  <p className=" text-slate-500">{users.penayangan}</p>
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
