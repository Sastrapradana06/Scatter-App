import { DataUser } from "../Data/data-user";
const { createContext, useReducer, useContext } = require("react");

export const EditProfilContext = createContext({})

export const useEditProfilContext = () => {
    return useContext(EditProfilContext)
}

function  reducer(state, action) {
    switch(action.type) {
        default:
            throw new Error()
    }
}


const initialState = {
    avatar: '',
    name: '',
    userName: '',
    bio: '',
    mengikuti: '',
    pengikut: '',
    dataUser: {}
}

export function EditProfilProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const EditProfilValue = [state, dispatch]
    return (
        <EditProfilContext.Provider value={EditProfilValue}>
            {children}
        </EditProfilContext.Provider>
    )
}