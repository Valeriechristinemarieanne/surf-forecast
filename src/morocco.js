import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function morocco() {
    return (
        <BrowserRouter>
            <div>
                <h1> Morocco rendering</h1>
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
                </div>
            </div>
        </BrowserRouter>
    );
}
