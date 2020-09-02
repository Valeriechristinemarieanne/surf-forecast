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

export default function Country(props, { id }) {
    const classes = useStyles();
    const [countryname, setCountry] = useState("");
    const [countrydescriptionlong, setCountryDescription] = useState("");
    const [countryimg, setCountryImg] = useState("");
    const [surfspots, setSurfspots] = useState([]);

    useEffect(() => {
        console.log("I am in country component before axios");

        axios
            .get(`/server/allCountries/${props.match.params.country}`)
            .then((response) => {
                console.log(
                    "whats my result in country component",
                    response.data
                );
                setCountry(response.data[0].countrydisplayname);
                setCountryDescription(response.data[0].countrydescriptionlong);
                setCountryImg(response.data[0].countryimg);
                setSurfspots(response.data);
            })
            .catch((err) => {
                console.log("error in axios request to get country: ", err);
            });
    }, []);
    console.log(countryname);

    return (
        <Container disableGutters>
            <img className="countryimage" src={countryimg} />
            <Container className={classes.BreadcrumbsContainer}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="none" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="none" color="inherit" href="/allCountries">
                        Surfing around the World
                    </Link>
                    <Typography color="textPrimary">{countryname}</Typography>
                </Breadcrumbs>
            </Container>
            <Typography className={classes.h4} gutterBottom variant="h4">
                Surfing in {countryname}
            </Typography>
            <Typography className={classes.Subtitle} variant="subtitle1">
                {countrydescriptionlong}
            </Typography>

            <Container className={classes.DividerContainer}>
                <Divider variant="middle" />
            </Container>
            <Container className={classes.SearchContainer}>
                <Typography className={classes.h5} gutterBottom variant="h5">
                    Surfing spots
                </Typography>
            </Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {surfspots.map((surfspot, index) => (
                    <div className="mappedsurfspots" key={index}>
                        <Link
                            underline="none"
                            href={"/allCountries/" + surfspot.surfspotname}
                        >
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={surfspot.surfspotimg}
                                        title="Surfing"
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {surfspot.surfspotdisplayname}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                        >
                                            {surfspot.surfspotdescriptionshort}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Grid>
        </Container>
    );
}
