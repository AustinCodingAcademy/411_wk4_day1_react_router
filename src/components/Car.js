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
    let car = cars.find(car=>car.id == id)
    return (
        <div>
            <Container maxWidth="xs">
                <Paper>
                    <h3>{car.Name}</h3><br />
                    <Chip label={`Name: ${car.Name}`} />
                    <Chip label={`ID: ${car.id}`} />
                    <Chip label={`MPG: ${car.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: ${car.Cylinders}`} />
                </Paper>
            </Container>
        </div>
    )


}

export default Car