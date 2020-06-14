import React from 'react'
import cars from '../cars.json'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {

    let carId = props.match.params.id;
    let currentCar = cars[carId];

    return (
        <div>
        <Card>
        <CardContent><h1>{currentCar.Name}</h1>
        MPG: {currentCar.Miles_per_Gallon}<br/>
        Cyl: {currentCar.Cylinders}<br/>
        Displ: {currentCar.Displacement}<br/>
        HorsePower: {currentCar.Horsepower}<br/>
        Wt (lbs): {currentCar.Weight_in_lbs}<br/>
        Acc: {currentCar.Acceleration}<br/>
        Year: {currentCar.Year}<br/>
        Origin: {currentCar.Origin}<br/>
       </CardContent>
       </Card>    
        </div>
    )
}

export default Car