import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'
// import material ui components here //
// Container, Paper, Chip //
const styles = {
    root: {
        padding: "20px",
        display: "flex",
        justifyContent : "center"
    },
    paper: {
        width : "50%",
        padding : "40px"
    }
}

const Car = (props) => {
    const { classes } = props;

    const id = +props.match.params.id
    
    let thisCar = cars.find(function(car){
        if(car.id === id){
            return car
        }
    })



    return (
    <Container className={classes.root}>
        <Paper className={classes.paper}>
            <h1>
                {thisCar.Name}
            </h1>
            <Chip label={`id: ${thisCar.id}`}></Chip>
            <Chip label={`Name: ${thisCar.Name}`}></Chip>
            <Chip label={`MPG: ${thisCar.Miles_per_Gallon}`}></Chip>
            <Chip label={`Cylinders: ${thisCar.Cylinders}`}></Chip>
            <Chip label={`Displacement: ${thisCar.Displacement}`}></Chip>
            <Chip label={`Weight(lbs): ${thisCar.Weight_in_lbs}`}></Chip>
            <Chip label={`Horsepower: ${thisCar.Horsepower}`}></Chip>
            <Chip label={`Acceleration: ${thisCar.Acceleration}`}></Chip>
            <Chip label={`Year: ${thisCar.Year}`}></Chip>
            <Chip label={`Origin: ${thisCar.Origin}`}></Chip>

        </Paper>
    </Container>
    )
}

export default withStyles(styles)(Car)