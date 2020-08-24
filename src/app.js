import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import welcome from "./welcome";
import allCountries from "./allCountries";
import country from "./country";
import morocco from "./morocco";
import portugal from "./portugal";
import spain from "./spain";
import Surfspot from "./surfspot";

export default function App() {
    return (
        <div className="maincontainer">
            <BrowserRouter>
                <Route exact path="/" component={welcome} />
                <Route exact path="/allCountries" component={allCountries} />
                <Route
                    exact
                    path="/allCountries/:country"
                    component={country}
                />
                {/* <Route exact path="/allCountries/morocco" component={morocco} />
                <Route exact path="/allCountries/spain" component={spain} />
                <Route
                    exact
                    path="/allCountries/portugal"
                    component={portugal}
                /> */}

                <Route
                    exact
                    path="/allCountries/:country/:surfspot"
                    component={Surfspot}
                />
            </BrowserRouter>
        </div>
    );
}
