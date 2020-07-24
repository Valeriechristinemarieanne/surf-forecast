import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1>Surfs up</h1>
            <h5>Welcome to our surf forecast</h5>
            <Link to="/allCountries">Find your country</Link>{" "}
        </div>
    );
}
