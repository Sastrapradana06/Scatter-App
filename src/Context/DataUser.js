import { DataUser } from "../Data/data-user";
const { createContext, useReducer, useContext } = require("react");

export const DataUserContext = createContext({})

export const useDataUserContext = () => {
    return useContext(DataUserContext)
}

function  reducer(state, action) {
    switch(action.type) {
        case 'EditAvatar':
            return {...state, avatar: action.payload}
        case 'EditName':
            return {...state, name: action.payload}
        case 'EditUsername':
            return {...state, username: action.payload}
        case 'EditBio':
            return {...state, bio: action.payload}
        case 'EditMengikuti':
            return {...state, mengikuti: action.payload}
        case 'EditPengikut':
            return {...state, pengikut: action.payload}
        case 'EditDataUser':
            return {...state, dataUser: action.payload}
        case 'AlertTampil':
            return {...state, alert: ''}
        case 'AlertClose':
            return {...state, alert: 'hidden'}
        case 'GetDataTweet':
            return {...state, dataTweet: action.payload}
        case 'GetStatusTweet':
            return {...state, statusTweet: action.payload}
        case 'GetImageTweet':
            return {...state, imageTweet: action.payload}
        case 'GetComent':
            return {...state, coment: action.payload}
        case 'GetRetweet':
            return {...state, retweet: action.payload}
        case 'GetLike':
            return {...state, like: action.payload}
        case 'GetViews':
            return {...state, views: action.payload}
        case 'GetMedia':
            return {...state, dataMedia: action.payload}
        default:
            throw new Error()
    }
}


const initialState = {
    dataUser: DataUser,
    dataTweet: [],
    dataMedia: [],
    avatar: DataUser.avatar,
    name: DataUser.name,
    username: DataUser.username,
    bio: DataUser.bio,
    mengikuti: DataUser.mengikuti,
    pengikut: DataUser.pengikut,
    alert: 'hidden',
    statusTweet: '',
    imageTweet: '',
    coment: '',
    retweet: '',
    like: '',
    views: ''
}

export function DataUserProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const DataUserValue = [state, dispatch]
    return (
        <DataUserContext.Provider value={DataUserValue}>
            {children}
        </DataUserContext.Provider>
    )
}