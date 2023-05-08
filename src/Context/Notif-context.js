import { createContext, useContext, useReducer } from "react";
import Semua from "../Notif/Semua";
import Terverifikasi from "../Notif/Terverifikasi";
import Sebutan from "../Notif/Sebutan";

export const NotifContext = createContext({})

export const useNotifContext = () => {
    return useContext(NotifContext)
}

function reducer(state, action) {
    switch(action.type) {
        case 'ContentSemuaAktif':
            return {...state, 
                contenAktif: <Semua />}
        case 'ContentTerverifikasiAktif':
            return {...state, 
                contenAktif: <Terverifikasi />}
        case 'ContentSebutanAktif':
            return {...state, 
                contenAktif: <Sebutan />}
        default:
            throw new Error()
    }
}

const initialState = {
    contenAktif: <Semua />
}

export function NotifProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const NotifValue = [state, dispatch]
    return (
        <NotifContext.Provider value={NotifValue}>
            {children}
        </NotifContext.Provider>
    )
}