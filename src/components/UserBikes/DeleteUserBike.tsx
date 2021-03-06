
import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";
import APIURL from '../../helpers/environment'

interface Props {
    token: string | null;
    userBikeId: number;
    // appointment:{
    //     savedDate: string;
    //     userInput: string;
    //     id: number;
    }
    // bike: any,




interface State {
    // userbike: any;
//         savedDate: string;
//         userInput: string;
//         id: number} |null;
// }
}

class DeleteUserBike extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            // userbike: null,
        }
        this.deleteUserBike = this.deleteUserBike.bind(this)
    }



deleteUserBike() {
    // const AppId = this.state.appointment.id
    fetch(`${APIURL}/userbike/${this.props.userBikeId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // this.setState({
        //   appointment: data.deleteUserBike,
        // });
        console.log("response", data);
        window.location.reload();
      });
  }

  componentDidMount() {
    // this.deleteUserBike();
    console.log('User Bikes' , this.props.userBikeId)
  }

render(){
  const buttonStyle ={
    // display: 'flex',
    // justifyContent: 'right',
    // alignContent: 'right',
    bottom:"1vh",
    marginLeft: "2em",
    left: "6em",
    marginTop: "2em",
    right: "20px",
    marginBottom: "1em"
    
    
  

  }
    return(
        <div >
            {/* <h1>can you see me?</h1>
            <div>how about this?</div> */}
            
            <Button  style={buttonStyle} variant='contained' onClick={this.deleteUserBike}>Delete</Button>
            
            

        </div>
    )
}
}

export default DeleteUserBike;

