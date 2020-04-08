import React from 'react';
import cars from '../cars.json';
import { Typography, Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const id = Number(props.match.params.id);
    const car = cars.find(car => car.id === id);
    console.log(car);
    return (
        <Container 
            maxWidth="sm" 
            style={{marginTop: "55px"}}>
            <Paper style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "35vh",
                padding: "25px 10px"
                }}>
                <Container>
                    <Typography variant="h3">{car.Name}</Typography>
                </Container>
                <Container style={{}}>
                    <Chip label={`id: ${car.id}`} style={{margin: "0"}}/>
                    <Chip label={`Name: ${car.Name}`} />
                    <Chip label={`Miles per gallon: ${car.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: ${car.Cylinders}`} />
                    <Chip label={`Displacement: ${car.Displacement}`} />
                    <Chip label={`Horsepower: ${car.Horsepower}`} />
                    <Chip label={`Weight in lbs: ${car.Weight_in_lbs}`} />
                    <Chip label={`Acceleration: ${car.Acceleration}`} />
                    <Chip label={`Year: ${car.Year}`} />
                    <Chip label={`Origin: ${car.Origin}`} />
                </Container>
            </Paper>
        </Container>
    )
}

export default Car