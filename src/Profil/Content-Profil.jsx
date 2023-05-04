
import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsVerified, IconsViews } from "../Utils/Icons";

export default function ContenProfil() {
    const [state] = useHomeContext()
    console.log(state.getRetweet);
    return (
        (state.getRetweet.map((e) => {
            return  (
            <div className="flex gap-2 mt-3 w-[95%] m-auto" key={e.item.coment}>
                <img src={e.item.avatar} alt="" className="w-[50px] h-[50px] rounded-full"/>
                <div className="flex flex-col gap-2 w-full text-[.9rem]">
                    <div className="flex gap-2 w-full">
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
                    <img src={e.item.photo} alt=""  className="w-full border h-[300px] rounded-xl object-cover "/>
                    <div className="flex gap-3 items-center text-[.8rem] text-gray-400">
                        <div className="flex gap-1">
                            <p>
                                <IconsComent />
                            </p>
                            <span>{e.item.coment}</span>
                        </div>
                        <div className="flex gap-1">
                            <p>
                                <IconsRetweet />
                            </p>
                            <span>{e.item.rettwet}</span>
                        </div>
                        <div className="flex gap-1">
                            <p>
                                <IconsLove />
                            </p>
                            <span>{e.item.likes}</span>
                        </div>
                        <div className="flex gap-1">
                            <p className="">
                                <IconsViews />
                            </p>
                            <span>{e.item.penayangan}</span>
                        </div>
                        <div className="flex gap-1">
                            <p>
                                <IconsSosial />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )
        }))
    )
}