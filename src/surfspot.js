import React, { useEffect } from "react";
import axios from "axios";

export default function Surfspot(props) {
    useEffect(() => {
        console.log("props.match.params: ", props.match.params);

        axios
            .get(
                `/server/allCountries/${props.match.params.country}/${props.match.params.surfspot}`
            )
            .then((response) => {
                console.log("Getting data back!!");
                console.log("response.data: ", response.data);
            })
            .catch((err) => {
                console.log("error: ", err);
            });
    });

    return (
        <div>
            <p>name of surfspot: </p>
            <p>short description of surfspot</p>
            <p>long description of surfspot</p>
            <p>weather conditions</p>
        </div>
    );
}
