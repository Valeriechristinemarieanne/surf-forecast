import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Breadcrumbs } from "@material-ui/core";

export default function morocco() {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Link color="inherit" to="/allCountries">
                    Surfing in Europe
                </Link>
                <Typography color="textPrimary">Morocco</Typography>
            </Breadcrumbs>
            <Typography variant="h4">Surfing in Morocco</Typography>
            <Typography variant="subtitle1" component="p" className="subtitle">
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>
            <Typography variant="subtitle1" component="p" className="subtitle">
                From a surfer’s standpoint, the Iberian Peninsula has it all.
                And Portugal takes the prize! Its outstanding surf culture,
                authentic charm, the cute little whitewashed villages all along
                its coast, great food, and world-class waves draw an
                international crowd of surfers. Notwithstanding the fact that
                it’s one of the best places on the planet to learn to surf, with
                numerous surf camps and mellow waves to practice on.
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
