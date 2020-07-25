import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 480,
        maxHeight: 450,
        margin: 30,
    },
    media: {
        height: 180,
    },
});

export default function allCountries() {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4">Surfing in Europe</Typography>
            <Typography variant="subtitle1" component="p" className="subtitle">
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
            <Grid container direction="row" justify="left" alignItems="left">
                <Link to="/allCountries/morocco">
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
                <Link to="/allCountries/portugal">
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
                <Link to="/allCountries/spain">
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
            </Grid>
        </Container>
    );
}
