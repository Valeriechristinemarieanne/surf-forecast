import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import allCountries from "./allCountries";

export default function Welcome() {
    return (
        <div>
            <h1>Surfs up</h1>
            <h5>Welcome to our surf forecast</h5>
            <BrowserRouter>
                <Route path="/allCountries" component={allCountries} />
                <Link to="/allCountries">Find your surf spot</Link>{" "}
            </BrowserRouter>
        </div>
    );
}
