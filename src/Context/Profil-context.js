import { createContext, useContext, useReducer } from "react";
import ContenTweet from "../Profil/Content-Tweet";
import ContentMedia from "../Profil/Content-Media";
import ContentSuka from "../Profil/Content-Suka";
// import { dataRetwett } from "../Data/data-retwett";

export const ProfilContext = createContext({})

export const useProfilContext = () => {
    return useContext(ProfilContext)
}

function reducer(state, action) {
    switch(action.type) {
        case 'GetMedia':
            return {...state, dataProfilTampil: <ContentMedia />, statuRetweet: false}
        case 'GetTweet&Balasan':
            return {...state, dataProfilTampil: <ContenTweet />, statuRetweet: true}
        case 'GetTweet':
            return {...state, dataProfilTampil: <ContenTweet />, statuRetweet: true}
        case 'GetSuka':
            return {...state, dataProfilTampil: <ContentSuka />, statuRetweet: false}
        default:
            throw new Error()
    }
}

const initialState = {
    dataProfilTampil : <ContenTweet />,
    statuRetweet: true
}


export function ProfilProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const ProfilValue = [state, dispatch]
    return (
        <ProfilContext.Provider value={ProfilValue}>
            {children}
        </ProfilContext.Provider>
    )
}