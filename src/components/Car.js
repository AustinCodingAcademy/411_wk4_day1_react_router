import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

//why is line 9 nesssicary?
const Car = (props) => {
    const x = props.match.params.id;
    let car;
    for (let i=0; i<cars.length; i++) {
        if (cars[i].id === parseInt(x)) {
            car = cars[i]
        }
    }
    return (
        <h1>specific car: {car.Name}</h1>
        
    )
}

export default Car