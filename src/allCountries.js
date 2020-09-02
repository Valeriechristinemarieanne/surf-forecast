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
    const [allcountries, setAllCountries] = useState([]);

    useEffect(() => {
        console.log("Trying to get data into my component");
        axios
            .get(`server/allCountries`)
            .then((response) => {
                console.log(
                    "Still trying to get data, whats my response:",
                    response.data[0].country
                );
                setAllCountries(response.data);
                /* console.log("allcountries:", allcountries); */
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
                {allcountries.map((country) => (
                    <div className="mappedsurfspots" key={country.id}>
                        <Link
                            underline="none"
                            href={"/allCountries/" + country.country}
                        >
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={country.countryimg}
                                        title="Surfing in Morocco"
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {country.countrydisplayname}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                        >
                                            {country.countrydescriptionshort}
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
