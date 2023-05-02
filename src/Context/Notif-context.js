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
        case 'BorderSemuaAktif':
            return {...state, 
                borderSemua: 'border-aktif', borderTerverifikasi: '', 
                borderSebutan: '', 
                contenAktif: <Semua />}
        case 'BorderTerverifikasiAktif':
            return {...state, 
                borderTerverifikasi: 'border-aktif', borderSebutan: '',
                borderSemua: '',
                contenAktif: <Terverifikasi />}
        case 'BorderSebutanAktif':
            return {...state, 
                borderSebutan: 'border-aktif', 
                borderSemua: '', 
                borderTerverifikasi: '',
                contenAktif: <Sebutan />}
        default:
            throw new Error()
    }
}

const initialState = {
    borderSemua: 'border-aktif',
    borderTerverifikasi: '',
    borderSebutan: '',
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