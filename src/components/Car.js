import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const id = parseInt(props.match.params.id);
    const car = cars.find(car => car.id === +id)
    //const car = cars.find(car =>car.id==props.match.params.id)
    return (
        <Container fixed maxWidth="xs" className="car-container">
          <Paper elvation={3} className="car-paper">
            <h2>{car.Name}</h2>
            {
                Object.keys(car).map((key, idx) => {
                  return <Chip key={idx} 
                  label={`${key}: ${car[key]}`} />
                })
            }
          </Paper>
        </Container>
    )
}

export default Car