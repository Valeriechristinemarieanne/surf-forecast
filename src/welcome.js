import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Typography,
    Container,
    Card,
    CardMedia,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: 0,
    },
    media: {
        height: 450,
    },
});

export default function Welcome() {
    const classes = useStyles();
    return (
        <Container className="welcomecover">
            <Card>
                <CardMedia
                    className={classes.media}
                    image="/surfers.jpg"
                    title="Surfers"
                />
                <Typography variant="h2">Surf's up</Typography>
                <Button>
                    <Link to="/allCountries">Find your surf paradise</Link>{" "}
                </Button>
            </Card>
        </Container>
    );
}
