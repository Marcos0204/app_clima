import React from 'react'
import Form from '../../components/Form'
import { Container, makeStyles } from '@material-ui/core';


const useStyles= makeStyles((theme)=>{
   
} )

const Home = () => {
    const classes= useStyles()
    return (
        <Container maxWidth="lg">
            <Form />
        </Container>
    )
}

export default Home


