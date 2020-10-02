import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { API_KEY } from "../secrets.json";
import {
    Typography,
    Container,
    Link,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Breadcrumbs,
    Divider,
} from "@material-ui/core";

import ForeCastInfo from "./forecastinfo";
import SurfGearInfo from "./surfgearinfo";
import SurfEtiquette from "./surfetiquette";

const useStyles = makeStyles(() => ({
    root: {
        width: 800,
        maxHeight: 450,
        margin: 30,
    },
    Container: {
        padding: 0,
        margin: 0,
        width: "100%",
    },
    BreadcrumbsContainer: {
        paddingTop: 30,
        paddingLeft: 50,
    },
    h4: {
        paddingTop: 30,
        paddingLeft: 50,
    },
    h5: {
        paddingBottom: 0,
    },
    h6: {
        paddingTop: 50,
        paddingLeft: 30,
    },
    Subtitle: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        maxWidth: "90%",
    },
    forecastContainer: {
        display: "flex",
        flexDirection: "row",
    },
    InfoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    infodropper: {
        position: "sticky",
        top: 30,
    },
    Table: {
        width: 650,
    },
    tableContainer: {
        paddingTop: 30,
    },
    allTables: {
        paddingLeft: 30,
    },
}));

const reducer = (state, action) => {
    if (action.type == "SURF_UPDATE") {
        return {
            ...state,
            dayOne: {
                ...state.dayOne,
                morningWaveHeight: action.data.hours[6].waveHeight.noaa,
                morningAirTemperature: action.data.hours[6].airTemperature.noaa,
                morningWaterTemperature:
                    action.data.hours[6].waterTemperature.noaa,
                morningWavePeriod: action.data.hours[6].wavePeriod.noaa,
                morningWindSpeed: action.data.hours[6].windSpeed.noaa,
                lunchWaveHeight: action.data.hours[12].waveHeight.noaa,
                lunchAirTemperature: action.data.hours[12].airTemperature.noaa,
                lunchWaterTemperature:
                    action.data.hours[12].waterTemperature.meto,
                lunchWavePeriod: action.data.hours[12].wavePeriod.noaa,
                lunchWindSpeed: action.data.hours[12].windSpeed.noaa,
                eveningWaveHeight: action.data.hours[18].waveHeight.noaa,
                eveningAirTemperature:
                    action.data.hours[18].airTemperature.noaa,
                eveningWaterTemperature:
                    action.data.hours[18].waterTemperature.noaa,
                eveningWavePeriod: action.data.hours[18].wavePeriod.noaa,
                eveningWindSpeed: action.data.hours[18].windSpeed.noaa,
            },
            dayTwo: {
                ...state.dayTwo,
                morningWaveHeight: action.data.hours[30].waveHeight.noaa,
                morningAirTemperature:
                    action.data.hours[30].airTemperature.noaa,
                morningWaterTemperature:
                    action.data.hours[30].waterTemperature.meto,
                morningWavePeriod: action.data.hours[30].wavePeriod.noaa,
                morningWindSpeed: action.data.hours[30].windSpeed.noaa,
                lunchWaveHeight: action.data.hours[6].waveHeight.noaa,
                lunchAirTemperature: action.data.hours[36].airTemperature.noaa,
                lunchWaterTemperature:
                    action.data.hours[36].waterTemperature.meto,
                lunchWavePeriod: action.data.hours[36].wavePeriod.noaa,
                lunchWindSpeed: action.data.hours[36].windSpeed.noaa,
                eveningWaveHeight: action.data.hours[42].waveHeight.noaa,
                eveningAirTemperature:
                    action.data.hours[42].airTemperature.noaa,
                eveningWaterTemperature:
                    action.data.hours[42].waterTemperature.noaa,
                eveningWavePeriod: action.data.hours[42].wavePeriod.noaa,
                eveningWindSpeed: action.data.hours[42].windSpeed.noaa,
            },
            dayThree: {
                ...state.dayThree,
                morningWaveHeight: action.data.hours[54].waveHeight.noaa,
                morningAirTemperature:
                    action.data.hours[54].airTemperature.noaa,
                morningWaterTemperature:
                    action.data.hours[54].waterTemperature.meto,
                morningWavePeriod: action.data.hours[54].wavePeriod.noaa,
                morningWindSpeed: action.data.hours[54].windSpeed.noaa,
                lunchWaveHeight: action.data.hours[60].waveHeight.noaa,
                lunchAirTemperature: action.data.hours[60].airTemperature.noaa,
                lunchWaterTemperature:
                    action.data.hours[60].waterTemperature.meto,
                lunchWavePeriod: action.data.hours[60].wavePeriod.noaa,
                lunchWindSpeed: action.data.hours[60].windSpeed.noaa,
                eveningWaveHeight: action.data.hours[66].waveHeight.noaa,
                eveningAirTemperature:
                    action.data.hours[66].airTemperature.noaa,
                eveningWaterTemperature:
                    action.data.hours[66].waterTemperature.noaa,
                eveningWavePeriod: action.data.hours[66].wavePeriod.noaa,
                eveningWindSpeed: action.data.hours[66].windSpeed.noaa,
            },
        };
    }

    return state;
};

export default function Surfspot(props) {
    const classes = useStyles();
    const [surfspotname, setSurfspot] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [country, setCountry] = useState("");

    // Display 3 dates ahead
    const today = new Date();
    const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    const tomorrow = today.getDate() + 1;
    const datetomorrow =
        tomorrow + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

    const aftertomorrow = today.getDate() + 2;
    const dateaftertomorrow =
        aftertomorrow +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    // My Reducer
    const [surfState, dispatchSurfState] = useReducer(reducer, {
        dayOne: {
            morningWaveHeight: "",
            morningAirTemperature: "",
            morningWaterTemperature: "",
            morningWavePeriod: "",
            morningWindSpeed: "",
            lunchWaveHeight: "",
            lunchAirTemperature: "",
            lunchWaterTemperature: "",
            lunchWavePeriod: "",
            lunchWindSpeed: "",
            eveningWaveHeight: "",
            eveningAirTemperature: "",
            eveningWaterTemperature: "",
            eveningWavePeriod: "",
            eveningWindSpeed: "",
        },
        dayTwo: {
            morningWaveHeight: "",
            morningAirTemperature: "",
            morningWaterTemperature: "",
            morningWavePeriod: "",
            morningWindSpeed: "",
            lunchWaveHeight: "",
            lunchAirTemperature: "",
            lunchWaterTemperature: "",
            lunchWavePeriod: "",
            lunchWindSpeed: "",
            eveningWaveHeight: "",
            eveningAirTemperature: "",
            eveningWaterTemperature: "",
            eveningWavePeriod: "",
            eveningWindSpeed: "",
        },
        dayThree: {
            morningWaveHeight: "",
            morningAirTemperature: "",
            morningWaterTemperature: "",
            morningWavePeriod: "",
            morningWindSpeed: "",
            lunchWaveHeight: "",
            lunchAirTemperature: "",
            lunchWaterTemperature: "",
            lunchWavePeriod: "",
            lunchWindSpeed: "",
            eveningWaveHeight: "",
            eveningAirTemperature: "",
            eveningWaterTemperature: "",
            eveningWavePeriod: "",
            eveningWindSpeed: "",
        },
    });

    useEffect(() => {
        axios
            .get(
                `/server/allCountries/${props.match.params.country}/${props.match.params.surfspot}`
            )
            .then((response) => {
                setSurfspot(response.data[0].surfspotdisplayname);
                setDescription(response.data[0].surfspotdescriptionlong);
                setImage(response.data[0].surfspotimg);
                setCountry(response.data[0].country);

                const lat = response.data[0].lat;
                const lng = response.data[0].lng;
                const params =
                    "waveHeight,airTemperature,waterTemperature,wavePeriod,windSpeed";

                fetch(
                    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
                    {
                        headers: {
                            Authorization: API_KEY,
                        },
                    }
                )
                    .then((resp) => resp.json())
                    .then((jsonData) => {
                        dispatchSurfState({
                            type: "SURF_UPDATE",
                            data: jsonData,
                        });
                    });
            })
            .catch((err) => {
                console.log("err in axios weather data req: ", err);
            });
    }, []);

    return (
        <Container className={classes.Container}>
            <img className="surfspotimage" src={image} />
            <Container className={classes.BreadcrumbsContainer}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Home
                    </Link>
                    <Link color="inherit" href="/allCountries">
                        Surfing around the world
                    </Link>
                    <Link color="inherit" href={`/allCountries/${country}`}>
                        Surfing in {country}
                    </Link>
                    <Typography color="textPrimary">{surfspotname}</Typography>
                </Breadcrumbs>
            </Container>
            <Typography className={classes.h4} gutterBottom variant="h4">
                {surfspotname}
            </Typography>
            <Typography className={classes.Subtitle} variant="subtitle1">
                {description}
            </Typography>
            <Container className={classes.Container}>
                <Divider variant="middle" />
            </Container>
            <Container>
                <Typography className={classes.h6} variant="h6">
                    Your 3-day surf forecast for {surfspotname}
                </Typography>{" "}
            </Container>

            <Container className={classes.forecastContainer}>
                <Container className={classes.allTables}>
                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.Table}>
                            <caption>Your surf forecast for {date}</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            ☀️{" "}
                                            {
                                                surfState.dayOne
                                                    .lunchAirTemperature
                                            }{" "}
                                            °C 🌫️{" "}
                                            {
                                                surfState.dayOne
                                                    .lunchWaterTemperature
                                            }{" "}
                                            °C
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        Wave Height
                                    </TableCell>
                                    <TableCell align="center">
                                        Wave Period
                                    </TableCell>
                                    <TableCell align="center">
                                        Wind Speed
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Morning 6 AM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.morningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.morningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.morningWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Noon 12 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.lunchWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.lunchWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.lunchWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Evening 6 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.eveningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.eveningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayOne.eveningWindSpeed}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.Table}>
                            <caption>
                                Your surf forecast for {datetomorrow}
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            ☀️{" "}
                                            {
                                                surfState.dayTwo
                                                    .lunchAirTemperature
                                            }{" "}
                                            °C 🌫️{" "}
                                            {
                                                surfState.dayTwo
                                                    .lunchWaterTemperature
                                            }{" "}
                                            °C
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        Wave Height
                                    </TableCell>
                                    <TableCell align="center">
                                        Wave Period
                                    </TableCell>
                                    <TableCell align="center">
                                        Wind Speed
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Morning 6 AM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.morningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.morningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.morningWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Noon 12 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.lunchWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.lunchWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.lunchWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Evening 6 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.eveningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.eveningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayTwo.eveningWindSpeed}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.Table}>
                            <caption>
                                Your surf forecast for {dateaftertomorrow}{" "}
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            ☀️{" "}
                                            {
                                                surfState.dayThree
                                                    .lunchAirTemperature
                                            }{" "}
                                            °C 🌫️{" "}
                                            {
                                                surfState.dayThree
                                                    .lunchWaterTemperature
                                            }{" "}
                                            °C
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="center">
                                        Wave Height
                                    </TableCell>
                                    <TableCell align="center">
                                        Wave Period
                                    </TableCell>
                                    <TableCell align="center">
                                        Wind Speed
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Morning 6 AM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.morningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.morningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.morningWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Noon 12 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.lunchWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.lunchWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.lunchWindSpeed}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Evening 6 PM
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.eveningWaveHeight}{" "}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.eveningWavePeriod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {surfState.dayThree.eveningWindSpeed}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container className={classes.InfoContainer}>
                    <Container className={classes.infodropper}>
                        {" "}
                        <ForeCastInfo />
                        <SurfGearInfo />
                        <SurfEtiquette />{" "}
                    </Container>{" "}
                </Container>
            </Container>
        </Container>
    );
}
