import React from 'react'
import cars from '../cars.json'

import {useParams} from "react-router-dom"
import { Container, Paper, Chip } from "@mui/material";
// import MUI components here //


const Car = (props) => {
    const carId = useParams().id
    const theCar = cars.find((car) => car.id === Number(carId))


    return (
        <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{theCar.Name.toUpperCase()}</h2>
        {Object.keys(theCar).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${theCar[key]}`}></Chip>;
        })}
      </Paper>
    </Container>


    )
}

export default Car