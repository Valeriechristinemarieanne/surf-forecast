import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    makeStyles,
    Breadcrumbs,
    Link,
    Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 530,
        maxHeight: 450,
        margin: 30,
    },
    BreadcrumbsContainer: {
        paddingTop: 30,
        paddingLeft: 50,
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
        paddingTop: 30,
        paddingLeft: 45,
        letterSpacing: 2,
    },
    Subtitle: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
    },
});

export default function allCountries() {
    const classes = useStyles();
    const [allcountries, setAllCountries] = useState("");

    useEffect(() => {
        console.log("Trying to get data into my component");
        axios
            .get(`server/allCountries`)
            .then((response) => {
                console.log(
                    "Still trying to get data, whats my response:",
                    response.data[0].country
                );
                setAllCountries(response.data[0]);
                console.log("allcountries:", allcountries);
            })
            .catch((err) => {
                console.log("error in getting allCountries data: ", err);
            });
    }, []);

    return (
        <Container disableGutters>
            <img className="countryimage" src="/surfingaroundtheworld.jpg" />
            <Container className={classes.BreadcrumbsContainer}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="textPrimary">
                        Surfing around the World
                    </Typography>
                </Breadcrumbs>
            </Container>

            <Typography className={classes.h4} gutterBottom variant="h4">
                Surfing around the World
            </Typography>
            <Typography variant="subtitle1" className={classes.Subtitle}>
                Typically when we read about the world’s best surfing spots we
                find ourselves being directed towards the West Coast of the
                United States of America, to Australia, or to Bali on Java in
                Indonesia, but the reality is that there are many amazing spots
                for surfing in Europe. The weather in Europe is unpredictable at
                the best of times but if you get a good sunny day you could
                easily be in Bali or on the Sunshine Coast of Australia, for the
                waters are oh so very blue, clear and, believe it or not, even
                warm too!
            </Typography>
            <Container className={classes.DividerContainer}>
                <Divider variant="middle" />
            </Container>
            <Container className={classes.SearchContainer}>
                <Typography className={classes.h5} gutterBottom variant="h5">
                    Surfing in Europe & Africa
                </Typography>
            </Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Link underline="none" href="/allCountries/morocco">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/Surfing-in-Morocco.jpg"
                                title="Surfing in Morocco"
                            />
                            <CardContent>
                                <Typography variant="h5">Morocco</Typography>
                                <Typography variant="body2" component="p">
                                    Whether you're looking for reelling ten foot
                                    points, endless mellow six foot walls or the
                                    perfect wave to learn on, Morocco hast it
                                    all.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/portugal">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/surfing-in-portugal.jpg"
                                title="Surfing in Portugal"
                            />
                            <CardContent>
                                <Typography variant="h5">Portugal </Typography>
                                <Typography variant="body2" component="p">
                                    Portugal has a very mild climate with solid
                                    surf conditions, making it a popular surfing
                                    destination for surfers from inside and
                                    outside Europe.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/spain">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/surfing-in-spain.jpg"
                                title="Surfing in Spain"
                            />
                            <CardContent>
                                <Typography variant="h5">Spain </Typography>
                                <Typography variant="body2" component="p">
                                    Spain has a lot going for it, an excellent
                                    climate, good food and an interesting
                                    history - oh, and world class surf - lots of
                                    world class surf.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/france">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/Surfing-in-France.jpg"
                                title="Surfing in France"
                            />
                            <CardContent>
                                <Typography variant="h5">France</Typography>
                                <Typography variant="body2" component="p">
                                    Whether you're looking for reelling ten foot
                                    points, endless mellow six foot walls or the
                                    perfect wave to learn on, Morocco hast it
                                    all.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/england">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/Surfing-in-England.jpg"
                                title="Surfing in France"
                            />
                            <CardContent>
                                <Typography variant="h5">England</Typography>
                                <Typography variant="body2" component="p">
                                    Whether you're looking for reelling ten foot
                                    points, endless mellow six foot walls or the
                                    perfect wave to learn on, Morocco hast it
                                    all.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link underline="none" href="/allCountries/france">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/Surfing-in-nl.jpg"
                                title="Surfing in the Netherlands"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    The Netherlands
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Whether you're looking for reelling ten foot
                                    points, endless mellow six foot walls or the
                                    perfect wave to learn on, Morocco hast it
                                    all.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Container>
    );
}
