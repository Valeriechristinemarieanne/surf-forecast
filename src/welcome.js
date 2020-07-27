import React from "react";
import {
    Button,
    Typography,
    Container,
    makeStyles,
    Link,
} from "@material-ui/core";
import createSpacing from "@material-ui/core/styles/createSpacing";

const useStyles = makeStyles({
    Video: {
        height: "100%",
        overflow: "hidden",
    },
    Container: {
        position: "relative",
        width: "100%",
        minHeight: 300,
        maxHeight: 800,
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    SubContent: {
        textAlign: "center",
        padding: 10,
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
                src="/backgroundVideo.mp4"
            />
            <Container className={classes.Content}>
                <Container className={classes.SubContent}>
                    <Typography variant="h1" letterSpacing={2}>
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
