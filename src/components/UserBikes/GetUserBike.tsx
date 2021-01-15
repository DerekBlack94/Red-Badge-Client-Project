import React, { Component } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Container,} from "@material-ui/core";

import GetUserBikeDisplay from "./GetUserBikeDisplay";
import DeleteUserBike from './DeleteUserBike'
import UpdateUserBike from './UpdateUserBike'
import APIURL from '../../helpers/environment'
import Paper from '@material-ui/core/Paper';



interface State {
  userbike: Array<userBikeInterface>;
  
 
};

interface Props {
  token: string | null;
  
}
interface userBikeInterface {
  make: string,
  model: string,
  year: string;
  color: string;
  size: string;
  tireSize: string;
  userInput: string;
  id: number;
  userId : number,
  user: {
    role: "user"| "admin"
  }
}

class GetUserBike extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userbike: [],
      
    };
  }

  fetchedUserBike() {
    fetch(`${APIURL}/userbike/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userbike: data.getUserBike,
        });
        console.log("response", data.getUserBike.user);
        console.log('test',this.state.userbike)
      });
  }

  componentDidMount() {
    this.fetchedUserBike();
    console.log('User Bikes' , this.state.userbike)
  }

  

 

  render() {
    const paperStyle = {
      backgroundColor: "green",
      width: "20vw",
      
      

    }
    const textStyle = {
      color: "white",
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }
  
    
    return (
      <div>
        
        
        
    <div>

        {this.state.userbike.map((bike: userBikeInterface, index: number) => {
                return(
                  
                    <div key={index} >
                      <Paper style={paperStyle}>
                      <h2 style={textStyle}>Your {bike.make} {bike.model}</h2>
                        <h3 style={textStyle}>Make:{bike.make}</h3>
                        <h3 style={textStyle}>Model:{bike.model}</h3>
                        <h3 style={textStyle}>Year:{bike.year}</h3>
                        <h3 style={textStyle}>Color:{bike.color}</h3>
                        <h3 style={textStyle}>Size:{bike.size}</h3>
                        <h3 style={textStyle}>Tire Size:{bike.tireSize}</h3>
                        <h3 style={textStyle}>Comments:{bike.userInput}</h3>
                       
                       
                        {bike.userId.toString() === localStorage.getItem('userId') ? <UpdateUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> } 
                        {bike.userId.toString() === localStorage.getItem('userId') ? <DeleteUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> } 
                        {localStorage.getItem("role") === "admin" ? <DeleteUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> }
                        {localStorage.getItem("role") === "admin" ? <UpdateUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> }
                        
                        </Paper>
                    </div>
                )
            })} 
       
       </div>

         
      </div>
      
    );
  }
}


export default GetUserBike;
