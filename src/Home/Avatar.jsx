export default function Avatar(item) {
  return (
    <div className="w-[45px] h-[45px] rounded-full border border-black overflow-hidden">
      <img src={item.avatar} alt="" className="" />
    </div>
  );
};
