import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Auth from '../Auth/Auth';
import Drawer from '../Main/Drawer'
import Signup from '../Auth/SignUpDisplay'
// import CreateUserBike from './UserBike/CreateUserBike'
import Login from '../Auth/LoginDisplay'
import { isClassExpression } from 'typescript';
import Home from '../Main/Home'


interface Props {
    clearToken:() => void
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
}

const NavbBar = (props: Props) => {
    const divStyle = {
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: "green"

    }

    return (
        <AppBar style={divStyle} position='fixed'>
            <Toolbar>
                <Grid container spacing={5}>
                    <Grid item >
                        {/* <Link to='home'>Home</Link> */}
                        <Drawer/>
                        {/* {this.props.token === "" ? <Drawer /> : null } */}
                    </Grid>
                    <Grid item xs style={divStyle}>
                    <Grid item xl={12}></Grid>
                        {/* <Signup updateToken={props.updateToken}/> */}
                        {/* <Login updateToken={props.updateToken} /> */}
                        {/* <Drawer /> */}
                        <Grid item xl>
                        
                    <Auth clearToken={props.clearToken} />

                    </Grid>
                    </Grid>
                </Grid>
                    {/* <Home /> */}
            </Toolbar>
        </AppBar>
    )
}

export default NavbBar;