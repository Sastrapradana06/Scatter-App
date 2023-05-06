import { useHomeContext } from "../Context/Home-context"
import {  IconsComent, IconsRetweet, IconsSosial, IconsTerLove, IconsVerified, IconsViews  } from "../Utils/Icons"

export default function ContentSuka() {
    const [state] = useHomeContext()

    return (
        (state.getSuka.map((e) => {
            return  (
            <div className="flex gap-3 mt-3 w-[95%] m-auto" key={e.item.coment}>
                <img src={e.item.avatar} alt="" className="w-[60px] h-[50px] rounded-full object-cover"/>
                <div className="flex flex-col gap-1 w-full text-[.9rem]">
                    <div className="flex gap-1 items-center w-full">
                        <p className="font-[500] text-[1rem]">{e.item.user}</p>
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
                    <img src={e.item.photo} alt=""  className="w-full h-[350px] rounded-xl object-cover "/>
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
    )
}