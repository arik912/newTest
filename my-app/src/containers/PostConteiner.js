import React from 'react'

import { getPosts } from '../actions/posts.action'
import { POST_SERVICE, BASE } from '../initServices'
import { connect } from 'react-redux'
import Posts from '../components/posts/postList'
import CircularIndeterminate from '../components/ProgressBar/ProgressBar'


class PostContainer extends React.Component {
  componentWillMount() {
    POST_SERVICE.getAllPosts(BASE).then(res => this.props.getPosts(res))
    
  }
  render(){
    return this.props.allPosts.posts?<Posts {...this.props} />:<CircularIndeterminate />
}
}

const mapStateToProps = state => ({
  allPosts: state.posts

});
const mapDispatchToProps = { getPosts };
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);