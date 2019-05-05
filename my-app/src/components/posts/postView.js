import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = {
    card: {
        maxWidth: '320px',
        boxSizing: 'border-box',
        margin: '20px'
    },
    title: {
        fontSize: 14,
    },
};

function PostView(props) {
    const { classes, data } = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    User id: {data.userId}
                </Typography>
                <Typography variant="h5" component="h2">
                    {data.title}
                </Typography>
                <Typography component="p">
                    {data.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${data.id}`}>
                    <Button size="small">read comments</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

PostView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostView);