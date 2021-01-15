import React from 'react';
import { Container } from '@material-ui/core'
import GetAppointment from './GetAppointment'
import image from '../assets/Logo.png'



interface Props {
    token: string | null
    // appointments: any
}

const GetAppointmentDisplay =(props: Props)=>{
    const divStyle = {
        marginTop: '2em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '500vh',
        paddingTop: '3em'
    }
    const textStyle ={
        color: "green",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: "3em"
    }
    const imgStyle = {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: "3em",

    }

    console.log('GetAppointment')

    return(
        <Container style={divStyle}>
            <div>
            <img style={imgStyle} src={image} width="300vw" height="300vh" />
            <h1 style={textStyle}>Scheduled Appointments</h1>
            
            <GetAppointment  token={props.token} />

            </div>
            
        </Container>
    )
}

export default GetAppointmentDisplay;