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
    console.log("allcountries:", allcountries);
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                massa tempor nec feugiat nisl pretium fusce id velit. Lobortis
                mattis aliquam faucibus purus in massa tempor nec. Lectus quam
                id leo in vitae turpis massa sed. Consectetur adipiscing elit ut
                aliquam purus sit amet luctus venenatis. Ut tellus elementum
                sagittis vitae et leo duis ut. Vitae congue eu consequat ac
                felis donec et. Cursus eget nunc scelerisque viverra mauris in
                aliquam. Nibh tellus molestie nunc non blandit. Ullamcorper sit
                amet risus nullam eget felis eget nunc. In aliquam sem fringilla
                ut morbi tincidunt augue interdum.
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
