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
import Link from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Container: {
        paddingLeft: 50,
        paddingTop: 30,
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

export default function SurfEtiquette() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className={classes.Container}>
            <Card className={classes.root}>
                <CardActions disableSpacing>
                    <Typography variant="body1">SURF ETIQUETTE</Typography>
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
                                    Right of Way - The fundamental rule in
                                    surfing tells us that the surfer closest to
                                    the peak always gets priority. In other
                                    words, if you're paddling for a right-hand
                                    wave, and a fellow surfer is on your left
                                    shoulder, you must give priority to him or
                                    her.
                                </Typography>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    Don't Drop In - In surfing, the general rule
                                    of thumb is: one man/woman, one wave. In
                                    most cases, you can't have two surfers
                                    riding the same wave in the same direction.
                                    When you disrespect the right-of-way rule,
                                    you're "burning" someone's wave and showing
                                    the utmost lack of respect. You are actually
                                    ruining a wave for someone else like you,
                                    who also enjoys surfing. Dropping in may
                                    result in severe injuries and damaged
                                    surfboards, so don't do to others what you
                                    wouldn't want done to yourself. Relax, take
                                    a deep breath, and wait for your turn. There
                                    will always be another way.
                                </Typography>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    Don't Snake - Snaking is a very common, and
                                    disrespectful behavior that can be seen,
                                    especially, in crowded lineups. Paddling
                                    around one or more surfers to get closer to
                                    the peak and gain priority is rude conduct.
                                    Select the best position in the line-up, and
                                    do not paddle around other surfers always
                                    wanting to catch all waves. Be patient.
                                    There are waves for everyone.
                                </Typography>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Typography variant="caption" component="p">
                                    Don't Get in the Way - Paddle wide, not
                                    through the peak, and stay in the water if
                                    you got caught inside and a surfer is
                                    enjoying his surf line.
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography
                            variant="caption"
                            component="p"
                            align="center"
                        >
                            More Info on Surf Etiquette
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
