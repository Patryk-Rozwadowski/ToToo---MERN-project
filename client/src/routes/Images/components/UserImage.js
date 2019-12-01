import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    title: {
        padding: 0,
    }
});

const UserImage = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.imageUrl}
                title={props.title}
            />

            <CardContent>
                <Typography className={classes.title} gutterBottom variant="h5" component="h5">
                    Title: {props.name ? props.name : 'unknown'}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography className={classes.title}  component="p">
                    Author: {props.author ? props.author : 'unknown'}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description ? props.description : 'No description'}
                </Typography>
            </CardContent>
            <CardActions>

                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>

            </CardActions>
        </Card>
    );
};

export default UserImage;