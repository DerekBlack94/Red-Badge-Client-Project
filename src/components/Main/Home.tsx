import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'
import image from '../assets/Logo.png'
import imageTwo from '../assets/Bikes.jpg'
import imageThree from '../assets/tobyDog1.png'




const Home = () => {
    const divStyle ={
                marginTop: '2em',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                height: "300vh",
                backgroundColor: "white",
                paddingTop: '7em'
    }
    const imageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

    }
    const textStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

    }
    return (
        <Container style={divStyle}>
            <div>
                <img style={imageStyle} src={image} width="250vw" height="250vh" />                
                <h1 style={textStyle}>Family Bike Chain</h1>
                
                <Button>Check Us Out</Button>
                <div></div>

                {/* <img src={imageTwo}  width="500vw" height="450vh" /> */}
                <img style={imageStyle} src={imageThree}  width="600vw" height="600vh" />
            </div>
        </Container>
    )
}

export default Home;