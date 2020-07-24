import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { API_KEY } from "../secrets.json";
import { SecretsManager } from "aws-sdk";
const reducer = (state, action) => {
    if (action.type == "SURF_MORNINGUPDATE") {
        return {
            ...state,
            dayOne: {
                ...state.dayOne,
                morningWaveHeight: action.waveHeight,
                morningAirTemperature: action.airTemperature,
                morningWaterTemperature: action.waterTemperature,
                morningWavePeriod: action.wavePeriod,
                morningWindSpeed: action.windSpeed,
            },
        };
    }

    if (action.type == "SURF_LUNCHUPDATE") {
        return {
            ...state,
            dayOne: {
                ...state.dayOne,
                lunchWaveHeight: action.waveHeight,
                lunchAirTemperature: action.airTemperature,
                lunchWaterTemperature: action.waterTemperature,
                lunchWavePeriod: action.wavePeriod,
                lunchWindSpeed: action.windSpeed,
            },
        };
    }

    if (action.type == "SURF_EVENINGUPDATE") {
        return {
            ...state,
            dayOne: {
                ...state.dayOne,
                eveningWaveHeight: action.waveHeight,
                eveningAirTemperature: action.airTemperature,
                eveningWaterTemperature: action.waterTemperature,
                eveningWavePeriod: action.wavePeriod,
                eveningWindSpeed: action.windSpeed,
            },
        };
    }

    return state;
};

export default function Surfspot(props) {
    const [surfspot, setSurfspot] = useState("");
    const [description, setDescription] = useState("");
    /*  const [airTemperature, setMorningAirTemperature] = useState("");
    const [waveHeight, setMorningWaveHeight] = useState(""); */

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

                const lat = response.data.lat;
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

                        /*  setMorningAirTemperature(
                            jsonData.hours[6].airTemperature.noaa
                        );
                        setMorningWaveHeight(jsonData.hours[6].waveHeight.noaa); */

                        dispatchSurfState({
                            type: "SURF_MORNINGUPDATE",
                            waveHeight: jsonData.hours[6].waveHeight.noaa,
                            airTemperature:
                                jsonData.hours[6].airTemperature.noaa,
                            waterTemperature:
                                jsonData.hours[6].waterTemperature.noaa,
                            wavePeriod: jsonData.hours[6].wavePeriod.noaa,
                            windSpeed: jsonData.hours[6].windSpeed.noaa,
                        });
                        dispatchSurfState({
                            type: "SURF_LUNCHUPDATE",
                            waveHeight: jsonData.hours[12].waveHeight.noaa,
                            airTemperature:
                                jsonData.hours[12].airTemperature.noaa,
                            waterTemperature:
                                jsonData.hours[12].waterTemperature.noaa,
                            wavePeriod: jsonData.hours[12].wavePeriod.noaa,
                            windSpeed: jsonData.hours[12].windSpeed.noaa,
                        });
                        dispatchSurfState({
                            type: "SURF_EVENINGUPDATE",
                            waveHeight: jsonData.hours[18].waveHeight.noaa,
                            airTemperature:
                                jsonData.hours[18].airTemperature.noaa,
                            waterTemperature:
                                jsonData.hours[18].waterTemperature.noaa,
                            wavePeriod: jsonData.hours[18].wavePeriod.noaa,
                            windSpeed: jsonData.hours[18].windSpeed.noaa,
                        });
                    });
            })
            .catch((err) => {
                console.log("error: ", err);
            });
    }, []);

    return (
        <div>
            <h2>{surfspot} </h2>
            <p>{description} </p>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayOne.morningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayOne.morningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayOne.morningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayOne.morningWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayOne.morningWindSpeed}{" "}
                kmh
            </p>
        </div>
    );
}
