import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Container: {
        paddingLeft: 80,
    },
    root: {
        width: 400,
        marginLeft: 0,
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
                        How to read a surf Forecast
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
                        <Typography>Wave Height</Typography>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    0.00 - 1.00 Beginner
                                </Typography>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    1.00 - 2.00 Intermediate
                                </Typography>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    from 2.00 Advanced
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography>Wave Period</Typography>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    0.05 - 1.00 Beginner
                                </Typography>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    1.00 - 2.00 Intermediate
                                </Typography>
                                <Typography variant="caption" component="p">
                                    {" "}
                                    from 2.00 Advanced
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography>Wind Speed</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
