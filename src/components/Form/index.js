import React, { useState } from 'react'

import { makeStyles, TextField, Button } from '@material-ui/core';

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



const Form = () => {

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

      console.log('form')
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
            <TextField 
                id="outlined-basic" 
                label="Pais" 
                name='pais'
                variant="outlined" 
                onChange={addSearch}
            />
            <Button 
              variant="contained"
              color="primary"
              type='submit'
              
              >
              Buscar
            </Button>
            <Button size="small" className={classes.margin}>
              Small
            </Button>
        </form>
    )
}

export default Form
