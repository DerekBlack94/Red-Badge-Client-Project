import React from 'react';
import UpdateUserBike from './UpdateUserBike';
import GetUserBike from './GetUserBike'

import { Container } from '@material-ui/core'
import image from '../assets/Logo.png'



interface Props {
    token: string | null

}

const GetUserBikeDisplay = (props: Props) => {
    const divStyle = {
        marginTop: '3em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '500vh',
        // paddingTop: '3em'
        paddingRight: "5em"
    }
    const textStyle ={
        color: "green",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: "4em"
        

    }
    const imgStyle = {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: "3em",

    }
    
    return (
        <Container style={divStyle} >
        <div>
            <img style={imgStyle}  src={image} width="300vw" height="300vh" /> 
        <h1 style={textStyle}>Bikes</h1>
        <GetUserBike token={props.token}/>
        </div>

        </Container>

        

    ) 
}

export default GetUserBikeDisplay;