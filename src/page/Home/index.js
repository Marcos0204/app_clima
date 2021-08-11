import React from 'react'
import Form from '../../components/Form'
import Clima from '../../components/clima'
import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      height: '100vh',
      alignItems: 'center',
      justifContent: 'space-between !importan',
    },
  }));

const Home = () => {
    const classes= useStyles()
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Form />
            <Clima />
        </Container>
    )
}

export default Home


