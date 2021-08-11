import React from 'react'
import Form from '../../components/Form'
import Clima from '../../components/clima'
import { Container, makeStyles } from '@material-ui/core';


const useStyles= makeStyles((theme)=>{
   
} )

const Home = () => {
    const classes= useStyles()
    return (
        <Container maxWidth="lg">
            <Form />
            <Clima />
        </Container>
    )
}

export default Home


