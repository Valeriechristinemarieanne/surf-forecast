import React from "react";
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
    GridList,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 450,
        margin: 30,
    },
    media: {
        height: 180,
    },
    h4: {
        paddingTop: 30,
        paddingLeft: 50,
    },
    h6: {
        paddingLeft: 50,
    },
    Subtitle: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        maxWidth: "90%",
    },
});

export default function morocco() {
    const classes = useStyles();
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="none" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="none" color="inherit" href="/allCountries">
                    Surfing in Europe
                </Link>
                <Typography color="textPrimary">Morocco</Typography>
            </Breadcrumbs>
            <Typography className={classes.h4} gutterBottom variant="h4">
                Surfing in Morocco
            </Typography>
            <Typography variant="subtitle1" className={classes.Subtitle}>
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>
            <img className="countryimage" src="/Surfing-in-Morocco.jpg" />
            <Typography variant="subtitle1" className={classes.Subtitle}>
                From a surfer’s standpoint, the Iberian Peninsula has it all.
                And Portugal takes the prize! Its outstanding surf culture,
                authentic charm, the cute little whitewashed villages all along
                its coast, great food, and world-class waves draw an
                international crowd of surfers. Notwithstanding the fact that
                it’s one of the best places on the planet to learn to surf, with
                numerous surf camps and mellow waves to practice on.
            </Typography>

            <Typography className={classes.h6} gutterBottom variant="h6">
                Find your perfect surf spot in Morrocco
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
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
                                <Typography variant="h5">Imsouane </Typography>
                                <Typography variant="body2" component="p">
                                    This is a smooth longboard wave that rarely
                                    gets messy, or big, and peels over soft sand
                                    for 300 meters.
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
                                    different. Right and left waves. But, in
                                    particular, a right hand.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link href="/allCountries/panoramas">
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
                <Link href="/allCountries/bananabeach">
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
                <Link href="/allCountries/killerpoint">
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

            <Typography variant="subtitle1" className={classes.Subtitle}>
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>
            <Typography variant="subtitle1" className={classes.Subtitle}>
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>
            <Typography variant="subtitle1" className={classes.Subtitle}>
                Morocco's pleasant climate and exposure to the North Atlantic's
                swells make it an attractive surfing destination, especially
                given it's close proximity to Europe. Morocco delivers her most
                tasty waves during fall, winter and spring. The land of the
                right-hand point break.
            </Typography>
        </Container>
    );
}
