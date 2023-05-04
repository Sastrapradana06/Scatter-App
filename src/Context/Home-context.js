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
            return {...state, coment: 'blue'}
        case 'Retweet':
            return {...state, retweet: 'blue'}
        case 'Love':
            return {...state, love: 'red'}
        default:
            throw new Error()
    }
}


const initialState = {
    borderUntukanda: 'border-aktif',
    borderMengikuti: '',
    coment: 'gray',
    retweet: 'gray',
    love: 'gray'
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