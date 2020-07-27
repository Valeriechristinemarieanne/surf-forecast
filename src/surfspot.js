import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { API_KEY } from "../secrets.json";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Link,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Breadcrumbs,
    Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 600,
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
    Subtitle: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        maxWidth: "90%",
    },
    Table: {
        maxWidth: 800,
        margin: 30,
    },
});

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
                    action.data.hours[12].waterTemperature.noaa,
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
                    action.data.hours[30].waterTemperature.noaa,
                morningWavePeriod: action.data.hours[30].wavePeriod.noaa,
                morningWindSpeed: action.data.hours[30].windSpeed.noaa,
                lunchWaveHeight: action.data.hours[6].waveHeight.noaa,
                lunchAirTemperature: action.data.hours[36].airTemperature.noaa,
                lunchWaterTemperature:
                    action.data.hours[36].waterTemperature.noaa,
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
                    action.data.hours[54].waterTemperature.noaa,
                morningWavePeriod: action.data.hours[54].wavePeriod.noaa,
                morningWindSpeed: action.data.hours[54].windSpeed.noaa,
                lunchWaveHeight: action.data.hours[60].waveHeight.noaa,
                lunchAirTemperature: action.data.hours[60].airTemperature.noaa,
                lunchWaterTemperature:
                    action.data.hours[60].waterTemperature.noaa,
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
    const [surfspot, setSurfspot] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

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
        /* console.log("props.match.params: ", props.match.params); */
        console.log("surfState", surfState);
        axios
            .get(
                `/server/allCountries/${props.match.params.country}/${props.match.params.surfspot}`
            )
            .then((response) => {
                setSurfspot(response.data.displayname);
                setDescription(response.data.description);
                setImage(response.data.image);

                /* const lat = response.data.lat;
                const lng = response.data.lng;
                const params =
                    "waveHeight,airTemperature,waterTemperature,wavePeriod,windSpeed";
                console.log(lat, lng, params);
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
                        console.log(
                            "jsonData from storm glass api: ",
                            jsonData.hours
                        );
                        console.log(
                            "Airtemperature at 6:00 am from noaa source: ",
                            jsonData.hours[6].airTemperature.noaa
                        );
                        console.log(
                            "wave height at 6:00 am from noaa source: ",
                            jsonData.hours[6].waveHeight.noaa
                        );

                        dispatchSurfState({
                            type: "SURF_UPDATE",
                            data: jsonData,
                        });
                    }); */
            })
            .catch((err) => {
                console.log("error: ", err);
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
                    <Link color="inherit" href="/allCountries/morocco">
                        Surfing in Morocco
                    </Link>
                    <Typography color="textPrimary">{surfspot}</Typography>
                </Breadcrumbs>
            </Container>
            <Typography className={classes.h4} gutterBottom variant="h4">
                {surfspot}
            </Typography>
            <Typography className={classes.Subtitle} variant="subtitle1">
                {description}
            </Typography>
            <Container className={classes.Container}>
                <Divider variant="middle" />
            </Container>

            {/* <Container>
                <Typography className={classes.Subtitle} variant="h6">
                    Your Forecast for {surfspot}
                </Typography>{" "}
            </Container> */}
            {/*  <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="subtitle1">
                            How to read a surf Forecast
                        </Typography>
                        <Typography>☀️ 🌫️</Typography>
                    </CardContent>
                </CardActionArea>
            </Card> */}
            <TableContainer className="tablecontainer">
                <Table className={classes.Table}>
                    <TableHead>
                        <Typography variant="h6">T O D A Y</Typography>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6 ">
                                    ☀️ {surfState.dayOne.lunchAirTemperature} °C
                                    🌫️
                                    {surfState.dayOne.lunchWaterTemperature} °C
                                </Typography>
                            </TableCell>
                            <TableCell>Wave Height</TableCell>
                            <TableCell>Wave Period</TableCell>
                            <TableCell>Wind Speed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Morning Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.morningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.morningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.morningWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Lunch Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.lunchWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.lunchWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.lunchWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                After Work Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.eveningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.eveningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayOne.eveningWindSpeed}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer className="tablecontainer">
                <Table className={classes.Table}>
                    <TableHead>
                        <Typography variant="h6">T O M O R R O W</Typography>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6 ">
                                    ☀️ {surfState.dayTwo.lunchAirTemperature} °C
                                    🌫️
                                    {surfState.dayTwo.lunchWaterTemperature} °C
                                </Typography>
                            </TableCell>

                            <TableCell>Wave Height</TableCell>
                            <TableCell>Wave Period</TableCell>
                            <TableCell>Wind Speed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Morning Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.morningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.morningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.morningWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Lunch Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.lunchWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.lunchWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.lunchWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                After Work Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.eveningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.eveningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayTwo.eveningWindSpeed}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer className="tablecontainer">
                <Table className={classes.Table}>
                    <TableHead>
                        <Typography variant="h6">
                            A F T E R {""}T O M O R R O W
                        </Typography>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6 ">
                                    ☀️ {surfState.dayThree.lunchAirTemperature}{" "}
                                    °C 🌫️
                                    {
                                        surfState.dayThree.lunchWaterTemperature
                                    }{" "}
                                    °C
                                </Typography>
                            </TableCell>

                            <TableCell>Wave Height</TableCell>
                            <TableCell>Wave Period</TableCell>
                            <TableCell>Wind Speed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Morning Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.morningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.morningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.morningWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Lunch Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.lunchWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.lunchWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.lunchWindSpeed}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                After Work Session
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.eveningWaveHeight}{" "}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.eveningWavePeriod}
                            </TableCell>
                            <TableCell>
                                {surfState.dayThree.eveningWindSpeed}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
