import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Container } from "@material-ui/core";

export default function country(props) {
    const [country, setCountry] = useState("");
    const [countryImage, setCountryImage] = useState("");
    const [countryDescription, setCountryDescription] = useState("");

    useEffect(() => {
        axios
            .get(`/server/allCountries/${props.match.params.country}`)
            .then((response) => {
                setCountry(response.data.country);
                setCountryDescription(response.data.countryDescription);
                setCountryImage(response.data.countryImage);
            })
            .catch((err) => {
                console.log("error: ", err);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4">{country}</Typography>
        </Container>
    );
}
