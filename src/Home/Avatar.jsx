import { useHomeContext } from "../Context/Home-context";

export default function Avatar(item) {
  const [, dispatch] = useHomeContext()
  function showAvatar(e) {

    dispatch({
      type: 'GetAvatar',
      payload: e.avatar
    })


    dispatch({
      type: 'GetShowAvatar',
      payload: ''
    })

  }

  return (
    <div className="w-[45px] h-[45px] lg:w-[70px] lg:h-[70px] rounded-full border border-black overflow-hidden "
    onClick={showAvatar.bind(this, item)}>
      <img src={item.avatar} alt="" className="" />
    </div>
  );
};
