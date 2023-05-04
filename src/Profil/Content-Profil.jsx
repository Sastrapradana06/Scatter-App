import { useHomeContext } from "../Context/Home-context";
import { IconsComent, IconsLove, IconsRetweet, IconsSosial, IconsViews } from "../Utils/Icons";

export default function ContenProfil() {
    const [state] = useHomeContext()
    return (
        <div className="flex gap-2 w-[95%] m-auto ">
            <div className="">
                <p className="w-[50px] h-[50px] border rounded-full">@</p>
            </div>
            <div className="flex flex-col gap-1 w-full text-[.9rem]">
                <div className="flex gap-2 w-full">
                    <p>sosmed keras <span>@</span></p>
                    <p>@sosmedkeras</p>
                    <p>. 15jam</p>
                </div>
                <div className="">
                    <p>Lah?</p>
                </div>
                <div className="w-full border h-[300px] rounded-xl">
                    <span className="">$</span>
                </div>
                <div className="flex gap-3 items-center text-[.8rem] text-gray-400">
                    <div className="flex gap-1">
                        <p>
                            {IconsComent(state.coment)}
                        </p>
                        <span>2.345</span>
                    </div>
                    <div className="flex gap-1">
                        <p>
                            {IconsRetweet(state.retweet)}
                        </p>
                        <span>2.345</span>
                    </div>
                    <div className="flex gap-1">
                        <p>
                            {IconsLove(state.love)}
                        </p>
                        <span>2.345</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="">
                            <IconsViews />
                        </p>
                        <span>2.345</span>
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
}