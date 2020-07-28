import React from "react";
import {
    Button,
    Typography,
    Container,
    makeStyles,
    Link,
    border,
    borderColor,
} from "@material-ui/core";

const useStyles = makeStyles({
    Video: {
        width: "100vw",
        objectFit: "contain",
        overflow: "hidden",
        position: "fixed",
    },
    Container: {
        position: "absolute",
        width: "100%",
        minHeight: 300,
        maxHeight: 800,
        margin: 0,
        padding: 0,
        overflow: "hidden",
    },
    Content: {
        position: "fixed",
        top: 0,
        padding: 0,
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    SubContent: {
        textAlign: "center",
        padding: 10,
    },
    h1: {
        letterSpacing: 9,
    },
    Button: {
        marginTop: 15,
        color: "white",
    },
    Link: {
        color: "whitesmoke",
    },
});

export default function Welcome() {
    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <video
                className={classes.Video}
                autoPlay
                loop
                muted
                width="1280"
                src="/backgroundVideo.mp4"
            />

            <Container className={classes.Content}>
                <Container className={classes.SubContent}>
                    <Typography variant="h1" className={classes.h1}>
                        Surf's up
                    </Typography>
                    <Button color="secondary" className={classes.Button}>
                        <Link
                            className={classes.Link}
                            color="primary"
                            underline="none"
                            href="/allCountries"
                        >
                            Find your surf paradise
                        </Link>{" "}
                    </Button>
                </Container>
            </Container>
        </Container>
    );
}
