import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { API_KEY } from "../secrets.json";

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
                            type: "SURF_UPDATE",
                            data: jsonData,
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
            <h4>Today!</h4>
            <h4>Your morning session</h4>
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

            <h4>Your lunch session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayOne.lunchAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayOne.lunchWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayOne.lunchWaveHeight} meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayOne.lunchWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayOne.lunchWindSpeed} kmh
            </p>

            <h4>Your evening session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayOne.eveningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayOne.eveningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayOne.eveningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayOne.eveningWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayOne.eveningWindSpeed}{" "}
                kmh
            </p>

            <h4>Tomorrow!</h4>
            <h4>Your morning session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayTwo.morningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayTwo.morningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayTwo.morningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayTwo.morningWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayTwo.morningWindSpeed}{" "}
                kmh
            </p>

            <h4>Your lunch session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayTwo.lunchAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayTwo.lunchWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayTwo.lunchWaveHeight} meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayTwo.lunchWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayTwo.lunchWindSpeed} kmh
            </p>

            <h4>Your evening session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayTwo.eveningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayTwo.eveningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayTwo.eveningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayTwo.eveningWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayTwo.eveningWindSpeed}{" "}
                kmh
            </p>

            <h4>Today!</h4>
            <h4>Your morning session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayThree.morningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayThree.morningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayThree.morningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is{" "}
                {surfState.dayThree.morningWavePeriod} mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayThree.morningWindSpeed}{" "}
                kmh
            </p>

            <h4>Your lunch session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayThree.lunchAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayThree.lunchWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayThree.lunchWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is {surfState.dayThree.lunchWavePeriod}{" "}
                mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayThree.lunchWindSpeed}{" "}
                kmh
            </p>

            <h4>Your evening session</h4>
            <p>
                The air temperature at 6 am is{" "}
                {surfState.dayThree.eveningAirTemperature}°C
            </p>
            <p>
                The water temperature at 6 am is{" "}
                {surfState.dayThree.eveningWaterTemperature}°C{" "}
            </p>
            <p>
                Wave Height at 6 am is {surfState.dayThree.eveningWaveHeight}{" "}
                meters
            </p>
            <p>
                The wave period at 6 am is{" "}
                {surfState.dayThree.eveningWavePeriod} mps
            </p>
            <p>
                The wind speed at 6 am is {surfState.dayThree.eveningWindSpeed}{" "}
                kmh
            </p>
        </div>
    );
}
