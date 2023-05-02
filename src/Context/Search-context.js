// import { createContext, useContext, useReducer } from "react";

// export const SearchContext = createContext({})

// export const useSearchContext = () => {
//     return useContext(SearchContext)
// }

// function reducer(state, action) {
//     switch(action.type) {
//         case 'TampilTweet':
//             return {...state, tweet: action.payload}
//         case 'TampilTerkini':
//             return {...state, terkini: action.payload}
//         case 'TampilAvatar':
//             return {...state, avatar: action.payload}
//         case 'TampilBtnClose':
//             return {...state, btnClose: action.payload}
//         case 'SetClassInput' :
//             return {...state, classInput: action.payload}
//         default:
//             throw new Error()
//     }
// }

// const initialState = {
//     tweet: '',
//     terkini: 'hidden',
//     avatar: '',
//     btnClose: 'hidden',
//     classInput: 'input'
// }

// export function SearchProvider({children}) {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const searchValue = [state, dispatch]

//     return (
//         <SearchContext.Provider value={searchValue}>
//             {children}
//         </SearchContext.Provider>
//     )
// }