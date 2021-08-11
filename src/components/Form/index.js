import React, { useState } from 'react'
import { SearchAction } from '../../store/Actions/SearchAction'
import { makeStyles, TextField, Button } from '@material-ui/core';
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
      searchAction()
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

const mapDispatchToProps = (dispatch)=>{
  return {
    searchAction: ()=> dispatch(SearchAction())
  }
}

export default connect(
  (state)=>(state),
  mapDispatchToProps
  )(Form)
