import { useHomeContext } from "../Context/Home-context"
import Avatar from "../Home/Avatar"
import {  IconsComent, IconsRetweet, IconsSosial, IconsTerLove, IconsVerified, IconsViews  } from "../Utils/Icons"

export default function ContentSuka() {
    const [state] = useHomeContext()

    return (
        (state.getSuka.length === 0 ? (
            <div className="w-full h-[200px]  flex  justify-center items-center">
                <div className="text-[1.2rem] w-[70%]">
                    <p>Pergi dan beri</p>
                    <p>Love pada mereka</p>
                    <p className="text-[.7rem] mt-2 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        ) : (
            (state.getSuka.map((e) => {
                return  (
                <div className="flex gap-3 mt-3 w-[95%] m-auto mb-2 " key={e.item.coment}>
                    {Avatar(e.item)}
                    <div className="flex w-[85%] flex-col gap-1 text-[.7rem]">
                        <div className="flex gap-2 flex-wrap items-center w-full">
                            <p className="font-[500] text-[.9rem] bg">{e.item.user}</p>
                            {e.item.verifaed ? (
                                <IconsVerified />
                            ) : (
                                ''
                            )}
                            <p className="text-gray-400">@{e.item.name}</p>
                            <p className="text-gray-400">. {e.item.waktu}</p>
                        </div>
                        <div className="text-[.9rem]">
                            <p>{e.item.status}</p>
                        </div>
                        <img src={e.item.photo} alt=""  className="w-full h-[100%] rounded-xl object-cover "/>
                        <div className="flex gap-3 items-center text-[.8rem] text-gray-400">
                            <div className="flex gap-1">
                                    <IconsComent />
                                <span>{e.item.coment}</span>
                            </div>
                            <div className="flex gap-1">
                                {IconsRetweet(e.item)}
                                <span>{e.item.rettwet}</span>
                            </div>
                            <div className="flex gap-1">
                                    {IconsTerLove(e)}
                                <span>{e.item.likes}</span>
                            </div>
                            <div className="flex gap-1">
                                    <IconsViews />
                                <span>{e.item.penayangan}</span>
                            </div>
                            <div className="flex gap-1">
                                    {IconsSosial(e)}
                            </div>
                        </div>
                    </div>
                </div>
                )
            }))
        ))
    )
}