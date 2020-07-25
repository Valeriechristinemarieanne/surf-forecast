import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container } from "@material-ui/core";

export default function Welcome() {
    return (
        <div className="welcomecover">
            <Typography variant="h2">Surf's up</Typography>
            <Button>
                <Link to="/allCountries">Find your surf paradise</Link>{" "}
            </Button>
        </div>
    );
}
