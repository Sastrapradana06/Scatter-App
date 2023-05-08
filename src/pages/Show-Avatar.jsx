import '../App.css'
import { useHomeContext } from '../Context/Home-context'

export default function ShowAvatar() {
    const [state, dispatch] = useHomeContext()
    return (
        <div className={`${state.showAvatar} w-full h-[100%] top-0  bg-show fixed z-30 text-white flex justify-center items-center flex-col gap-3`}>
            <img src={state.avatar} alt="" className='w-[75%] border border-black rounded-xl h-[300px] object-cover'/>
            
            <button className=" w-[100px] h-[40px] rounded-xl text-center bg-[#1c86e2] mt-3 hover:bg-[#0a62af] transition-all duration-300" onClick={() => dispatch({type: 'CloseShowAvatar'})}>Close
            </button>
        </div>
    )
}