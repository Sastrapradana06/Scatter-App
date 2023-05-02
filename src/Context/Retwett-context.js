import { createContext, useReducer } from "react";
// import { dataRetwett } from "../Data/data-retwett";

export const RetwettContext = createContext({})

function reducer(state, action) {
    switch(action.type) {
        case 'GetRetwett':
            return {...state, dataRetwett: action.payload}
        default:
            throw new Error()
    }
}

const initialState = {
    dataRetwett : {}
}


export function RetwettProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const RetwettValue = [state, dispatch]
    return (
        <RetwettContext.Provider value={RetwettValue}>
            {children}
        </RetwettContext.Provider>
    )
}