import React from "react";
import {
    Typography,
    Button,
    Link,
    Container,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
    },
    Container: {
        position: "relative",
        minHeight: 300,
        maxHeight: 800,
        overflow: "hidden",
        margin: 0,
        padding: 0,
    },
    Content: {
        position: "absolute",
        top: 0,
        padding: 0,
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    SubContent: {
        textAlign: "center",
        padding: 10,
    },
    Button: {
        marginTop: 30,
        color: "white",
        border: "white",
        padding: 10,
        borderRadius: 5,
    },
});

export default function BackgroundVideo() {
    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className={classes.root}
                src={require("../../../public/backgroundvideo.mp4")}
                type="video/mp4"
            ></video>
            <Container className={classes.Content}>
                <Container className={classes.SubContent}>
                    <Typography variant="h2">Surf's up</Typography>
                    <Button color="primary" /* className={classes.Button} */>
                        <Link underline="none" href="/allCountries">
                            Find your surf paradise
                        </Link>{" "}
                    </Button>
                </Container>
            </Container>
        </Container>
    );
}
