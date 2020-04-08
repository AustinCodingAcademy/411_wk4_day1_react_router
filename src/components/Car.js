import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const id = Number(props.match.params.id);
    const car = cars.find(car => car.id === id);
    console.log(car);
    return (
        <h1>{car.Name}</h1>
    )
}

export default Car