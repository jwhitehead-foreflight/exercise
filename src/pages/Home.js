import React from "react";
import SimpleCard from "../components/Card";
import SimpleSelect from "../components/Select";
import WeatherCard from "../components/Weather";
import { Container } from "@material-ui/core";

const Homepage = () => {
    return (
        <Container maxWidth="sm">
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'cadetblue',
                color: 'white',
                padding: 10,
                borderRadius: 5
            }}
                >Foreflight - Airport Information</h1>
        <div>
        <SimpleSelect/>
        <SimpleCard/>
        <WeatherCard/>
        </div>
        </Container>
    )
};

export default Homepage;