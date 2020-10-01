import React from "react";
import cars from "../cars.json";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

const Car = (props) => {
  const id = props.match.params.id;
  const car = cars.find((car) => id == car.id);

  return (
    <Box display="flex" justifyContent="center" m={10}>
      <Container class=" car-container, card" style={{ width: 700 }}>
        <Paper elevation={3} style={{ padding: 70 }}>
          <Typography
            component="div"
            style={{ backgroundColor: "white", fontWeight: "bold" }}
          >
            {car.Name}
          </Typography>
          <br />
          <Chip label={`id:${car.id}`} />
          <Chip label={`Name:${car.Name}`} />
          <Chip label={`Miles_per_Gallon:${car.Miles_per_Gallon}`} />
          <Chip label={`Cylinders:${car.Cylinders}`} />
          <Chip label={`Displacement:${car.Displacement}`} />
          <Chip label={`Horsepower:${car.Horsepower}`} />
          <Chip label={`Weight_in_lbs:${car.Weight_in_lbs}`} />
          <Chip label={`Acceleration:${car.Acceleration}`} />
          <Chip label={`Year:${car.Year}`} />
          <Chip label={`Origin:${car.Origin}`} />
        </Paper>
      </Container>
    </Box>
  );
};

export default Car;
