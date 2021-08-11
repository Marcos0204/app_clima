import * as types from '../Types/searchTypes'


const initialState = {
    loading:false,
    post:{},
    error:false
}

export const Search = (state=initialState, action) =>{
  
    switch (action.type) {
        case types.LOADIN:
            return {...state, loading:true}
        case types.SEARCHPOST:
            return {
                ...state, post: action.payload, loading:false
            }
        case types.ERROR:
            return {
                ...state, loading: false, error: true
            }

        default:
            return state
    }
}