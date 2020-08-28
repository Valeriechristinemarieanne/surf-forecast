import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Breadcrumbs,
    Link,
    makeStyles,
    Grid,
    Divider,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 320,
        maxHeight: 450,
        margin: 30,
    },
    media: {
        height: 180,
    },
    h4: {
        paddingTop: 30,
        paddingLeft: 50,
        letterSpacing: 2,
    },
    h5: {
        paddingLeft: 45,
        letterSpacing: 2,
    },
    h6: {
        paddingLeft: 50,
        letterSpacing: 2,
    },
    Subtitle: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        maxWidth: "90%",
    },
    Container: {
        display: "flex",
        flexDirection: "row",
        padding: 0,
        margin: 0,
        width: "100%",
    },
    BreadcrumbsContainer: {
        paddingTop: 30,
        paddingLeft: 50,
    },
    SearchContainer: {
        paddingTop: 30,
        paddingLeft: 50,
    },
}));

export default function Country(props) {
    const classes = useStyles();
    const [displaycountryname, setCountry] = useState("");
    const [countryImage, setCountryImage] = useState("");
    const [countryDescription, setCountryDescription] = useState("");

    useEffect(() => {
        console.log("I am in country component before axios");

        axios
            .get(`/server/allCountries/${props.match.params.country}`)
            .then((response) => {
                setCountry(response.data.displaycountryname);
                setCountryDescription(response.data.countryDescription);
                setCountryImage(response.data.countryImage);
            })
            .catch((err) => {
                console.log("error in axios request to get country: ", err);
            });
    }, []);

    return (
        <Container disableGutters>
            <img className="countryimage" src={countryImage} />
            <Container className={classes.BreadcrumbsContainer}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="none" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="none" color="inherit" href="/allCountries">
                        Surfing around the World
                    </Link>
                    <Typography color="textPrimary">
                        {displaycountryname}
                    </Typography>
                </Breadcrumbs>
            </Container>
            <Typography className={classes.h4} gutterBottom variant="h4">
                Surfing in {displaycountryname}
            </Typography>
            <Typography className={classes.Subtitle} variant="subtitle1">
                {countryDescription}
            </Typography>
        </Container>
    );
}
