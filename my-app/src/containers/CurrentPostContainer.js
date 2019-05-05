import React from 'react';
import { connect } from 'react-redux'
import { getComments } from '../actions/comments.action';
import { getCurrentPost } from '../actions/posts.action';
import { withRouter } from 'react-router';
import { POST_SERVICE, BASE } from '../initServices'
import Post from '../components/posts/post'

export class CurrentPostContainer extends React.Component {
    componentWillMount() {
        const { match: { params: { id } } } = this.props
        POST_SERVICE.getCommentsForCurrentPost(BASE, id)
            .then(res => this.props.getComments(res))

        POST_SERVICE.getCurrentPost(BASE, id)
            .then(res => this.props.getCurrentPost(res))
    }
    render() {
        return <Post {...this.props} />
    }
}

const mapStateToProps = state => ({
    commentsLoading: state.comments.loading,
    comments: state.comments.comments,
    allPosts: state.posts,
    currentPost: state.posts.currentPosts
});
const mapDispatchToProps = { getComments, getCurrentPost };



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentPostContainer));