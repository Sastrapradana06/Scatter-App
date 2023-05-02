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
        default:
            throw new Error()
    }
}


const initialState = {
    borderUntukanda: 'border-aktif',
    borderMengikuti: ''
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