import { useDataUserContext } from "../Context/DataUser";
import Nav from "../TulisTweet/Nav";
import Alert from "../Utils/Alert";
import UploadImage from "../TulisTweet/Upload-Image";
export default function TulisTweet() {
    const [state, dispatch] = useDataUserContext()
    const user = state.dataUser

    function getTweet(event) {
        event.preventDefault()
        dispatch({
            type: 'GetDataTweet',
            payload: [{
                avatar: state.avatar,
                user: state.name,
                name: state.username,
                waktu: 'baru saja',
                status: state.statusTweet,
                photo: state.imageTweet,
                coment: state.coment,
                rettwet: state.retweet,
                likes: state.like,
                penayangan: state.views
            },...state.dataTweet]
        })

        function restartInput() {
            dispatch({type: 'GetStatusTweet', payload: ''})
            dispatch({type: 'GetImageTweet', payload: ''})
            dispatch({type: 'GetComent', payload: ''})
            dispatch({type: 'GetRetweet', payload: ''})
            dispatch({type: 'GetLike', payload: ''})
            dispatch({type: 'GetViews', payload: ''})
        }
        restartInput()



        const filterPhoto = state.dataTweet.filter((e) => {
            return e.photo !== ''
          })
      
          dispatch({
            type: 'GetMedia',
            payload: [filterPhoto]
          })

    }

    return (
        <div className="text-white  w-full h-[100vh] p-2">
            <form onSubmit={getTweet}>
                <Nav />
                {Alert('Tweet Berhasil Dibuat', '')}
                <div className="w-full h-max mt-2 p-1 flex gap-2 lg:w-[80%] lg:m-auto lg:p-3">
                    <div className="">
                        <div className="avatar">
                            <img src={user.avatar} alt="" className="w-[50px] h-[50px] rounded-full object-cover"/>
                        </div>
                    </div>
                    <div className=" p-1 flex flex-col  gap-2 justify-center w-[80%]">
                        <div className="">
                                <p>{user.name}</p>
                            </div>
                        <div className="input-tweet lg:mb-5 lg:h-[200px]">
                            <textarea 
                                type="text"
                                value={state.statusTweet}
                                onChange={(e) => dispatch({type: 'GetStatusTweet', payload: e.target.value})} 
                                placeholder="Apa yang sedang terjadi??" className="bg-transparent w-full h-[100px] outline-none"
                            />
                        </div>
                        <div className="input-image w-full  h-max cursor-pointer mb-2">
                            <UploadImage/>
                        </div>
                        <div className="input-all flex gap-4">
                            <div className="coment text-[.7rem] text-center">
                                <input 
                                    type="text"
                                    value={state.coment}
                                    onChange={(e) => dispatch({type: 'GetComent', payload: e.target.value})}
                                    placeholder="coment"
                                    className="w-[55px] lg:w-[80px] lg:h-[25px] bg-transparent border text-center" 
                                />
                            </div>
                            <div className="retweet text-[.7rem] text-center">
                                <input 
                                    type="text"
                                    onChange={(e) => dispatch({type: 'GetRetweet', payload: e.target.value})}
                                    placeholder="retweet"
                                    className="w-[55px] lg:w-[80px] lg:h-[25px] bg-transparent border text-center" 
                                />
                            </div>
                            <div className="like text-[.7rem] text-center">
                                <input 
                                    type="text"
                                    value={state.like}
                                    onChange={(e) => dispatch({type: 'GetLike', payload: e.target.value})}
                                    placeholder="like"
                                    className="w-[55px] lg:w-[80px] lg:h-[25px] bg-transparent border text-center" 
                                />
                            </div>
                            <div className="views text-[.7rem] text-center">
                                <input 
                                    type="text"
                                    value={state.views}
                                    onChange={(e) => dispatch({type: 'GetViews', payload: e.target.value})}
                                    placeholder="views"
                                    className="w-[55px] lg:w-[80px] lg:h-[25px] bg-transparent border text-center" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}