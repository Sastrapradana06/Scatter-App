import '../App.css'
import { useHomeContext } from '../Context/Home-context'

export default function ShowAvatar() {
    const [state, dispatch] = useHomeContext()
    return (
        <div className={`${state.showAvatar} w-full h-[100%] top-0 bg-show fixed z-30 text-white flex justify-center items-center flex-col gap-3 lg:-left-0`}>
            <img src={state.avatar} alt="" className='w-[300px] border border-black  h-[300px] rounded-full object-cover'/>           
            <button className=" w-[100px] h-[40px] rounded-xl text-center bg-[#1c86e2] mt-3 hover:bg-[#0a62af] transition-all duration-300" onClick={() => dispatch({type: 'CloseShowAvatar'})}>Close
            </button>
        </div>
    )
}