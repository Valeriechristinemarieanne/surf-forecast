import React from "react";
import { Link } from "react-router-dom";

export default function allCountries() {
    return (
        <div>
            <Link to="/allCountries/morocco">Morocco</Link>
            <Link to="/allCountries/spain">Spain</Link>
            <Link to="/allCountries/portugal">Portugal</Link>{" "}
        </div>
    );
}
