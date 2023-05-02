import '../App.css'
import { useNavContext } from '../Context/Nav-context';
export default function ContenInput() {
    const [state] = useNavContext()
  return (
    <div className={`${state.contenLainnya}`}>
      <div className="w-full  flex justify-between items-center p-4 border-1">
        <div className="text-gray-400 font-semibold text-[1.1rem]">
          <p>Pencarian Terkini</p>
        </div>
        <button className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
      </div>
      <div className="text-center p-3 text-[.9rem] text-gray-400">
        <p>Coba cari orang, grup, atau pesan</p>
      </div>
    </div>
  );
}
