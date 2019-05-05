import React from 'react'
import PropTypes from 'prop-types'
import PostView from './postView'


function Posts(props) {
  const { allPosts:{posts} } = props
  return posts.map((el) => <PostView key={el.id} data={el} posts={posts}/>)

}

Posts.propTypes = {
  allPosts: PropTypes.object.isRequired,
};

export default Posts;