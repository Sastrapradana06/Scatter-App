import { useHomeContext } from "../Context/Home-context";

export default function Avatar(item) {
  const [state, dispatch] = useHomeContext()
  console.log(state.avatar);
  function showAvatar(e) {
    console.error(e);

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
    <div className="w-[45px] h-[45px] rounded-full border border-black overflow-hidden"
    onClick={showAvatar.bind(this, item)}>
      <img src={item.avatar} alt="" className="" />
    </div>
  );
};
