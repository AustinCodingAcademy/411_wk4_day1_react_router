import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const cardStyle = {
    margin: "0 auto",
    textAlign: "center",
    width: "30%",
    marginTop: 200
  };

const Car = (props) => {
    let id = props.match.params.id;
    return (
        <Card style={cardStyle}>
            <CardContent>
                <h2>{cars[id].Name}</h2>
                <Chip label={'id: ' + cars[id].id} />
                <Chip label={'id: ' + cars[id].Name} />
                <Chip label={'mpg: ' + cars[id].Miles_per_Gallon} />
                <Chip label={'cylinders: ' + cars[id].Cylinders} />
                <Chip label={'displacement: ' + cars[id].Displacement} />
                <Chip label={'horsepower: ' + cars[id].Horsepower} />
                <Chip label={'weight in lbs: ' + cars[id].Weight_in_lbs} />
                <Chip label={'acceleration: ' + cars[id].Acceleration} />
                <Chip label={'year: ' + cars[id].Year} />
                <Chip label={'origin: ' + cars[id].Origin} />
            </CardContent>
        </Card>
    )
}

export default Car;