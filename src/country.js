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
                            href={"/allCountries/" + surfspot.surfspot}
                        >
                            <Card className={classes.root}>
                                <CardActionArea>
                                    {/*  <CardMedia
                                        className={classes.media}
                                        image={surfspot.surfspotimg}
                                        title="Surfing"
                                    /> */}
                                    <CardContent>
                                        <Typography variant="h5">
                                            {surfspot.surfspotdisplayname}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                        >
                                            {surfspot.surfspotdisplayname}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                ))}

                <Link underline="none" href="/allCountries/morocco/anchorpoint">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/anchorpoint.jpg"
                                title="Anchorpoint"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Anchor Point
                                </Typography>
                                <Typography variant="body2" component="p">
                                    A steep take off. Powerful point break,
                                    which remains on a good day walk.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/morocco/imsouane">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/imsouane.jpg"
                                title="Imsouane"
                            />
                            <CardContent>
                                <Typography variant="h5">Imsouane</Typography>
                                <Typography variant="body2" component="p">
                                    A smooth longboard wave that peels over soft
                                    sand for 300 meters.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/devilsrock">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/devilsrock.jpg"
                                title="Devils Rock"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Devils Rock
                                </Typography>
                                <Typography variant="body2" component="p">
                                    A tough name for a break each day can be
                                    different. Right and left waves.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/panoramas">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/panoramas.jpg"
                                title="Panoramas"
                            />
                            <CardContent>
                                <Typography variant="h5">Panoramas</Typography>
                                <Typography variant="body2" component="p">
                                    Could reasonably have some flow. But also
                                    runs a nice long right.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/bananabeach">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/bananabeach.jpg"
                                title="Banana Beach"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Banana Beach
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Here you will often find the beginners
                                    because it is a relatively easy golf.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/killerpoint">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/killerpoint.jpg"
                                title="Killer Point"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Killer Point
                                </Typography>
                                <Typography variant="body2" component="p">
                                    A powerful wave. Which is higher than you
                                    think.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Container>
    );
}
