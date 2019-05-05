import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

function Comment(props) {
    const { classes, data } = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {data.email}
                </Typography>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                <Typography component="p">
                    {data.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);