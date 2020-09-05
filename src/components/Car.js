import React from 'react'
import cars from '../cars.json'
import {Card, CardContent, Divider, CardActions, Link, Container, Paper, Avatar, Chip} from '@material-ui/core'

// import material ui components here //
// Container, Paper, Chip //

 const Car = (props) => {
     let id = parseInt(props.match.params.id);
     let car = cars.find(car => car.id === id)
    return (         
    <div>
        <Container fixed>
            <Paper variant="outlined" className="paper">
            <Card>
                <CardContent>
                    <span className="carName">{car.Name}</span>
                    <ul className="carDetails">
                        <li>Id:{car.id}</li>
                        <li>Name: {car["Name"]}</li>    
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        <li>Weight_in_lbs: {car["Weight_in_lbs"]}</li>
                        <li>Acceleration: {car["Acceleration"]}</li>
                        <li>Year: {car["Year"]}</li>
                        <li>Origin: {car["Origin"]}</li>
                        {/* 
                        <li>Car_id:... 
                        <li>car_Name:...
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        <li>Weight_in_lbs: {car["Weight_in_lbs"]}</li>
                        <li>Acceleration: {car["Acceleration"]}</li>
                        <li>Year: {car["Year"]}</li>
                        <li>Origin: {car["Origin"]}</li> */}
                    </ul>
                </CardContent>
                    <Divider />
            </Card>
            </Paper>
        </Container>  
    </div>
    )
 }

export default Car