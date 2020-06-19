import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

//why is line 9 nesssicary?
const Car = (props) => {
    const x = parseInt(props.match.params.id);
    let car = cars.find(car => car.id === (x+1));
    return (
        <h1>specific car: {car.Name}</h1>
        
    )
}

export default Car