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
        paddingLeft: 50,
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

export default function SurfGearInfo() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className={classes.Container}>
            <Card className={classes.root}>
                <CardActions disableSpacing>
                    <Typography variant="body1">SURF GEAR INFO</Typography>
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
                                    🩱 Wetsuit – If you’re planning on surfing
                                    in the UK during the summer or winter then a
                                    wetsuit is going to be needed to maintain
                                    any sense of feeling in your extremities.
                                    Get down your local watersports retailer and
                                    get the guys in the know to fit you up as
                                    the correct sizing of a wettie is crucial to
                                    its function.
                                </Typography>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    🧷 Leash – A leash or leg rope is basically
                                    a long lead that attaches from your ankle to
                                    the back of the board to prevent you from
                                    being separated. They are at least as long
                                    as the length of the board so that if you
                                    wipeout it’ll be out of the way by the time
                                    you surface but close enough for you to hope
                                    back on quickly before the next wave comes.
                                </Typography>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    🏄 Board - There are 3 main types of board
                                    to choose from when surfing. Only 2 of these
                                    are really suitable for the beginner. Foam,
                                    boards which are generally blue and yellow
                                    are the most forgiving surfboard to start on
                                    and can be rented at most surf beaches.
                                    Although they are the most forgiving, they
                                    also have limited suitability for the
                                    improving beginner due to their very basic
                                    design.
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
