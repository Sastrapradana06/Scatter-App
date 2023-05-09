import { createContext, useContext, useReducer } from "react";

export const ContextNav = createContext({})

export const useNavContext = () => {
    return useContext(ContextNav)
}

function reducer(state, action) {
    switch(action.type) {
        case 'InputAktif':
            return {...state, 
                avatar: 'hidden',
                btnClose: '',
                btnSetting: 'hidden',
                contenUtama: 'hidden',
                contenLainnya: '',
                classInput: 'input-search'}
        case 'InputNonAktif': {
            return {...state, 
                avatar: '',
                btnClose: 'hidden',
                btnSetting: '',
                contenUtama: '',
                contenLainnya: 'hidden',
                classInput: 'input'}
        }
        case 'SidebarAktif':
            return {...state, 
                statusSidebar: '',}
        case 'SidebarNonAktif':
            return {...state, 
                statusSidebar: 'hidden'}
        case 'NavBawahAktif':
            return {...state, 
                statusNavBawah: '',}
        case 'NavBawahNonAktif':
            return {...state, 
                statusNavBawah: 'hidden'}
        default:
            throw new Error()
    }
}


const initialState = {
    avatar: '',
    btnClose: 'hidden',
    btnSetting: '',
    contenUtama: '',
    contenLainnya: 'hidden',
    classInput: 'input',
    statusSidebar: 'hidden',
    statusNavBawah: ''
}

export function NavProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const NavValue = [state, dispatch]
    return (
        <ContextNav.Provider value={NavValue}>
            {children}
        </ContextNav.Provider>
    )
}