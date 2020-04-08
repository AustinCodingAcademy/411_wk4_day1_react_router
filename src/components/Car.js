import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    console.log("props:", props.match.params.id)
    let car = cars.find(item => props.match.params.id == item.id)
    console.log (car)
    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
            <h1>{car.Name}</h1>
            <Chip label={`Id:${car.id}`} />
            <Chip label={`Name:${car.Name}`} />
            <Chip label={`Miles Per Gallon:${car.Miles_per_Gallon}`} />
            <Chip label={`Cylinders:${car.Cylinders}`} />
            <Chip label={`Displacement:${car.Displacement}`} />
            <Chip label={`Horsepower:${car.Horsepower}`} />
            <Chip label={`Weight in lbs :${car.Weight_in_lbs}`} />
            <Chip label={`Acceleration:${car.Acceleration}`} />
            <Chip label={`Year:${car.Year}`} />
            <Chip label={`Origin:${car.Origin}`} />

            </Paper>

        
      </Container>
        
    )
}

export default Car