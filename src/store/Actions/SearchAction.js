import * as types from '../Types/searchTypes'

export const SearchAction = (search) => async (dispatch)=>{
    console.log('dispatch')
        const { ciudad } = search
        const pais ='VE'
        const apiId= '1630cd83dc74e73f1b6201da24abae2f';
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
        
        const consultar = await fetch (url);
        const resultado = await consultar.json();
        console.log(resultado)
    dispatch({
        type:types.SEARCHPOST
    })
}