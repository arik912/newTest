import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Comments from '../comments/commentsList'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  comments: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

function Post(props) {
  const { classes, currentPost } = props;


  return currentPost ?
    (<Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        {currentPost.title}
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
        </Typography>
      <div className={classes.comments}>
        <Comments {...props} />
      </div>

    </Paper>) : null

}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);