
import { DataSearch } from "../Data/data-search";

export default function Tweet() {
  return (
    <div className={`flex flex-col w-[95%] justify-around m-auto mt-2 gap-2 cursor-pointer`}>
      {DataSearch.map((item) => {
        return (
          <div className="flex items-center justify-between" key={item.id}>
            <div className="w-[80%] flex flex-col gap-1 text-[.8rem] mt-2">
              <p className="text-gray-600 font-[600]">{item.tema}</p>
              <p className="font-[550]">{item.judul}</p>
              <p className="text-gray-600">{item.jumlahTweet}</p>
            </div>
            <div className="">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
