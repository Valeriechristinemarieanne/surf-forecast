import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function spain() {
    return (
        <BrowserRouter>
            <div>
                <h1> Spain rendering</h1>
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
                </div>
            </div>
        </BrowserRouter>
    );
}
