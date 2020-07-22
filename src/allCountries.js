import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import morocco from "./morocco";
import spain from "./spain";
import portugal from "./portugal";

export default function allCountries() {
    return (
        <BrowserRouter>
            <div>
                <h1> All countries rendering</h1>
                <div>
                    <h2>Morocco</h2>
                    <p>
                        Morocco's pleasant climate and exposure to the North
                        Atlantic's swells make it an attractive surfing
                        destination, especially given it's close proximity to
                        Europe. Morocco delivers her most tasty waves during
                        fall, winter and spring. The land of the right-hand
                        point break.
                    </p>
                    <Route path="/morocco" component={morocco} />
                    <Link to="/morocco">Find your surf spot in morocco</Link>
                </div>
                <div>
                    <h2>Spain</h2>

                    <p>
                        Spain has a lot going for it, an excellent climate, good
                        food and an interesting history - oh, and world class
                        surf - lots and lots of world class surf. The 4,000 km
                        of coastline makes Spain a surfers dream location, and
                        means that there will always be an uncrowded spot if you
                        are prepared to look.
                    </p>
                    <Route path="/spain" component={spain} />
                    <Link to="/spain">Find your surf spot in spain</Link>
                </div>
                <div>
                    <h2>Portugal</h2>

                    <p>
                        Portugal is a southern European country on the Iberian
                        Peninsula, bordering Spain. Its location on the Atlantic
                        Ocean has influenced many aspects of its culture: salt
                        cod and grilled sardines are national dishes, the
                        Algarve's beaches are a major destination and much of
                        the nation’s architecture dates to the 1500s–1800s, when
                        Portugal had a powerful maritime empire.
                    </p>
                    <Route path="/portugal" component={portugal} />
                    <Link to="/portugal">Find your surf spot in portugal</Link>
                </div>
            </div>
        </BrowserRouter>
    );
}
