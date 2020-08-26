import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
console.log("In the car component")
const Car = (props) => {
    console.log("In the car component")
    let id = props.match.params.id
    
    return(
    <div>
        <Container maxWidth="xs">
            <Paper>
                <h3>{cars[id-1].Name}</h3><br/>
    <Chip label={`Name: ${cars[id-1].Name}`}/>
    <Chip label={`ID: ${cars[id-1].id}`}/>
    <Chip label={`MPG: ${cars[id-1].Miles_per_Gallon}`}/>
    <Chip label={`Cylinders: ${cars[id-1].Cylinders}`}/>
            </Paper>
        </Container>
    </div>
    )
    
    
}

export default Car