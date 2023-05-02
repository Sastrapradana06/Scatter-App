export default function AvatarProfil(url) {
    return (
        <div className="w-max -mt-12 ml-2 rounded-full">
            <img src={url.avatar} alt="" className="w-[70px] h-[70px] rounded-full object-cover border-2 border-[black]"/>
        </div>
        )
}