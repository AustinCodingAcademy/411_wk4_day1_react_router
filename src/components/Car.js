import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

export default function Car (props) {

    const id = props.match.params.id

    cars[id - 1]
    console.log(cars)

  return (

    cars.find((car => car == id)(
        <p key={index}>{car}</p>
       ))


    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: 'white', height: '50vh' }} />
      </Container>
    </React.Fragment> 
  );
}