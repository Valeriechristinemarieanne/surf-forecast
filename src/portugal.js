import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function portugal() {
    return (
        <BrowserRouter>
            <div>
                <h1> Portugal rendering</h1>
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
                </div>
            </div>
        </BrowserRouter>
    );
}
