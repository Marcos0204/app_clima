import * as types from '../Types/searchTypes'

export const SearchAction = () => (dispatch)=>{
    console.log('dispatch')
    dispatch({
        type:types.SEARCHPOST
    })
}