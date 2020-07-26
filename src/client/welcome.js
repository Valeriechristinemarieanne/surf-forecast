import React from "react";
/* import { Link } from "react-router-dom"; */
import BackgroundVideo from "./backgroundvideo/backgroundVideo";
import "./app.css";
import { Container } from "@material-ui/core";

export default function Welcome() {
    return (
        <Container className="welcomecover">
            <BackgroundVideo />
        </Container>
    );
}
