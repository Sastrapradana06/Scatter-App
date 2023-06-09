const { createContext, useReducer, useContext } = require("react");

export const HomeContext = createContext({})

export const useHomeContext = () => {
    return useContext(HomeContext)
}

function  reducer(state, action) {
    switch(action.type) {
        case 'UntukAnda':
            return {...state, borderUntukanda: 'border-aktif', borderMengikuti: ''}
        case 'Mengikuti':
            return {...state, borderMengikuti: 'border-aktif', borderUntukanda:''}
        case 'Coment':
            return {...state, coment: 'green'}
        case 'GetRetweet':
            return {...state, statusRetweet: true, getRetweet: action.payload}
        case 'GetSuka':
            return {...state, statusSuka: true ,getSuka: action.payload}
        case 'DeleteRetweet':
            return {...state, statusRetweet: false, getRetweet: action.payload}
        case 'DeleteSuka':
            return {...state, statusSuka: false , getSuka: action.payload}
        case 'Love':
            return {...state, love: 'crimson'}
        case 'GetShowAvatar':
            return {...state, showAvatar: action.payload}
        case 'CloseShowAvatar':
            return {...state, showAvatar: 'hidden'}
        case 'GetAvatar':
            return {...state, avatar: action.payload}
        default:
            throw new Error()
    }
}


const initialState = {
    borderUntukanda: 'border-aktif',
    borderMengikuti: '',
    getRetweet: [],
    getSuka: [],
    statusRetweet: false,
    statusSuka: false,
    showAvatar: 'hidden',
    avatar: 'y'
}

export function HomeProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const HomeValue = [state, dispatch]
    return (
        <HomeContext.Provider value={HomeValue}>
            {children}
        </HomeContext.Provider>
    )
} 