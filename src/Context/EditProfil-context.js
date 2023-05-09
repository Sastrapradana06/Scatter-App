import { DataUser } from "../Data/data-user";
const { createContext, useReducer, useContext } = require("react");

export const EditProfilContext = createContext({})

export const useEditProfilContext = () => {
    return useContext(EditProfilContext)
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
        default:
            throw new Error()
    }
}


const initialState = {
    dataUser: DataUser,
    avatar: DataUser.avatar,
    name: DataUser.name,
    username: DataUser.username,
    bio: DataUser.bio,
    mengikuti: DataUser.mengikuti,
    pengikut: DataUser.pengikut,
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