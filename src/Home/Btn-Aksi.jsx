
import { IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsViews } from "../Utils/Icons";
import { useHomeContext } from "../Context/Home-context";

export default function BtnAksi(users) {
  const [state, dispatch] = useHomeContext()

  return (
    <div className="mt-2 flex w-[95%] justify-around cursor-pointer">
      {/* coment */}
      <div className="flex items-center gap-1">
        <button onClick={() => dispatch({type: 'Coment'})}>
          {IconsComent(state.coment)}
        </button>
        <p className="text-[.9rem] text-slate-500">{users.coment}</p>
      </div>
      {/* retwet */}
      <div className="flex items-center gap-1">
        <button onClick={() => dispatch({type: 'Retweet'})}>
          {IconsRetweet(state.retweet)}
        </button>
        <p className="text-[.9rem] text-slate-500">{users.rettwet}</p>
      </div>
      {/* like */}
      <div className="flex items-center gap-1">
        <button onClick={() => dispatch({type: 'Love'})}>
          {IconsLove(state.love)}
        </button>
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
  );
}
