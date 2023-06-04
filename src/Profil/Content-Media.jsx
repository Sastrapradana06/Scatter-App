import { useEffect } from "react";
import { useDataUserContext } from "../Context/DataUser";
import Avatar from "../Home/Avatar"
import {  IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsVerified, IconsViews  } from "../Utils/Icons"

export default function ContentMedia() {
  const [state, dispatch] = useDataUserContext();

  useEffect(() => {
    const filterPhoto = state.dataTweet.filter((e) => {
      return e.photo !== "";
    });

    dispatch({
      type: "GetMedia",
      payload: filterPhoto,
    });
  }, [dispatch, state.dataTweet]);

  return state.dataMedia.length === 0 ? (
    <div className="w-[100%] h-[280px] flex justify-center items-center m-auto">
      <div className="w-[80%]">
        <h1 className="text-[1.3rem]">
          <p>Atur cahaya,</p>
          <p>kamera...</p>
          <p>lampirkan!</p>
        </h1>
        <p className="mt-2 text-gray-500 text-[.9rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ducimus.</p>
      </div>
    </div>
  ) : (
    state.dataMedia.map((e, i) => {
      return (
        <div className="flex gap-3 w-[95%] m-auto mb-3 " key={i}>
          {Avatar(e)}
          <div className="flex w-[85%] flex-col gap-1 text-[.7rem]">
            <div className="flex gap-3 flex-wrap items-center w-full">
              <p className="font-[500] text-[.9rem] bg">{e.user}</p>
              {e.verifaed ? <IconsVerified /> : ""}
              <p className="text-gray-400">@{e.name}</p>
              <p className="text-gray-400">. {e.waktu}</p>
            </div>
            <div className="text-[.9rem]">
              <p>{e.status}</p>
            </div>
            <img src={e.photo} alt="" className="w-full h-[100%] rounded-xl object-cover " />
            <div className="flex justify-around items-center text-[.7rem] text-gray-400">
              <div className="flex gap-1">
                <IconsComent />
                <span>{e.coment}</span>
              </div>
              <div className="flex gap-1">
                {IconsRetweet(e)}
                <span>{e.rettwet}</span>
              </div>
              <div className="flex gap-1">
                {IconsLove(e)}
                <span>{e.likes}</span>
              </div>
              <div className="flex gap-1">
                <IconsViews />
                <span>{e.penayangan}</span>
              </div>
              <div className="flex gap-1">{IconsSosial(e)}</div>
            </div>
          </div>
        </div>
      );
    })
  );
}
