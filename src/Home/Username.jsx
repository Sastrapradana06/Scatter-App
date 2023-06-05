import { IconsVerified } from "../Utils/Icons";

export default function Username(item) {
  return (
    <div className="flex w-[100%] gap-2 text-[.8rem] lg:text-[1.1rem] lg:gap-4">
      <p className="text-[9.rem]">{item.user}</p>
      {item.verifaed ? (
        <IconsVerified />
      ) : (
        ""
      )}
      <p className="text-slate-500">@{item.name}</p>
      <p className="text-slate-500">. {item.waktu}</p>
    </div>
  );
}
