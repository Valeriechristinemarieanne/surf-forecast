import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@material-ui/core";

export default function morocco() {
    return (
        <Container>
            <Typography variant="h4">Surfing in Morocco</Typography>
            <Typography variant="subtitle1" component="p" className="subtitle">
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>

            <Button>
                <Link to="/allCountries/morocco/anchorpoint">Anchor Point</Link>
            </Button>
            <Button>
                <Link to="/allCountries/morocco/imsouane">Imsouane</Link>
            </Button>
            <Button>
                {" "}
                <Link to="/allCountries/morocco/devilsrock">Devils Rock</Link>
            </Button>
        </Container>
    );
}
