import React, { useState } from 'react'
import { SearchAction } from '../../store/Actions/SearchAction'
import { makeStyles, TextField, Button,FormControl, InputLabel, Select } from '@material-ui/core';
import { connect } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '500px',
      padding: '15px 20px',
      '& > *': {
        margin: theme.spacing(1),
        width: 'inherit'
      },
    },
  }));



const Form = ({searchAction}) => {

    const [ search, SetSearch ] = useState({
      ciudad:'',
      pais:''
    })
    
    const addSearch = (event) =>{

      console.log(event.target.value)
      SetSearch({
        ...search,
        [event.target.name]: event.target.value
      })
    }
    
    const handleSubmit = (e) =>{

      e.preventDefault();
      searchAction(search)
      SetSearch({
        ciudad:'',
        pais:''
      })
    }


    const classes= useStyles()   
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Ciudad" 
                variant="outlined" 
                onChange={addSearch}
                name='ciudad'
            />
            
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Selecciona un pais</InputLabel>
              <Select
                native
                value={search.pais}
                onChange={addSearch}
                label="Age"
                inputProps={{
                  name: 'pais',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value=''></option>
                <option value='US'>Estados Unidos</option>
                <option value='MX'>Mexico</option>
                <option value='AR'>Argentina</option>
                <option value='CO'>Colombia</option>
                <option value='CR'>Costa Rica</option>
                <option value='ES'>España</option>
                <option value='PE'>Perú</option>
                <option value='VE'>Venezuela</option>
              </Select>
            </FormControl>


            <Button 
              variant="contained"
              color="primary"
              type='submit'
              
              >
              Buscar
            </Button>
            
        </form>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    searchAction: (search)=> dispatch(SearchAction(search))
  }
}

export default connect(
  (state)=>(state),
  mapDispatchToProps
  )(Form)
