import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsViews } from "../Utils/Icons";
import { dataTwett } from "../Data/data-twett";
import "../font.css";
import Avatar from "./Avatar";
import ImageStatus from "./Image-Status";
import Status from "./Status";
import Username from "./Username";

export default function ContentAnda() {
  const [state, dispatch] = useHomeContext()

  function Retweet(item) {
    dispatch({
      type: 'GetRetweet',
      payload: [...state.getRetweet, {
        item
      }]
    })
  }

  return (
    <div className="flex flex-col mt-24 mb-[140px] h-max justify-around gap-20">
      {dataTwett.map((users) => {
        return (
          <div className="w-[100%] h-max p-1 flex justify-around font-saya text-white">
            {Avatar(users)}
            {/* content */}
            <div className="w-[85%] h-[350px] border-black">
              {Username(users)}
              {Status(users)}
              {ImageStatus(users)}
              <div className="mt-2 flex w-[95%] justify-around cursor-pointer">
                {/* coment */}
                <div className="flex items-center gap-1">
                  <button onClick={() => dispatch({type: 'Coment'})}><IconsComent /></button>
                  <p className="text-[.9rem] text-slate-500">{users.coment}</p>
                </div>
                {/* retwet */}
                <div className="flex items-center gap-1">
                  <button onClick={Retweet.bind(this, users)}><IconsRetweet /></button>
                  <p className="text-[.9rem] text-slate-500">{users.rettwet}</p>
                </div>
                {/* like */}
                <div className="flex items-center gap-1">
                  <button onClick={() => dispatch({ type: "Love" })}><IconsLove /></button>
                  <p className="text-[.9rem] text-slate-500">{users.likes}</p>
                </div>
                {/* tayangan */}
                <div className="flex items-center gap-1">
                  <span>
                    <IconsViews />
                  </span>
                  <p className="text-[.9rem] text-slate-500">{users.penayangan}</p>
                </div>
                {/* btn all */}
                <div className="flex items-center gap-1">
                  <span>
                    <IconsSosial />
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
