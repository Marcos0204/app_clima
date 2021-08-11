import * as types from '../Types/searchTypes'


const initialState = {
    post:''
}

export const Search = (state=initialState, action) =>{
    console.log('reducer')
    switch (action.type) {
        case types.SEARCHPOST:
            return state
        default:
            return state
    }
}