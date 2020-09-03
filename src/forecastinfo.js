import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Container: {
        paddingTop: 50,
        paddingLeft: 50,
        paddingBottom: 30,
    },
    root: {
        width: 350,
        marginLeft: 0,
        backgroundColor: "#fafafa",
    },

    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default function ForeCastInfo() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className={classes.Container}>
            <Card className={classes.root}>
                <CardActions disableSpacing>
                    <Typography variant="body1">
                        HOW TO READ A SURF FORECAST
                    </Typography>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    🌊 Wave Height: Significant Height of
                                    combined wind and swell waves in meters{" "}
                                </Typography>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    ⏲ Wave Period: Period of combined wind and
                                    swell waves in seconds
                                </Typography>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    🌬 Wind Speed: Speed of wind at 10m above sea
                                    level in meters per second.
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
