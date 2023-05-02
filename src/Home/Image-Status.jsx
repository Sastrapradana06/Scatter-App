export default function ImageStatus(users) {
    return (
        <img src={users.photo} alt="" className="bg-center object-cover w-[100%] h-[100%] rounded-2xl mt-2" />
    )
}