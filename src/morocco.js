import React from "react";
import { Link } from "react-router-dom";

export default function morocco() {
    return (
        <div>
            <h1> Morocco rendering</h1>
            <div>
                <h2>Morocco</h2>
                <p>
                    Morocco's pleasant climate and exposure to the North
                    Atlantic's swells make it an attractive surfing destination,
                    especially given it's close proximity to Europe. Morocco
                    delivers her most tasty waves during fall, winter and
                    spring. The land of the right-hand point break.
                </p>
                <Link to="/allCountries/morocco/anchorpoint">Anchor Point</Link>
                <Link to="/allCountries/morocco/imsouane">Imsouane</Link>
                <Link to="/allCountries/morocco/devilsrock">Devils Rock</Link>
            </div>
        </div>
    );
}
