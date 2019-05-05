import React from 'react'
import Comment from './commentView'


function Comments(props) {
    const { comments } = props;
    return comments?comments.map((el) => <Comment key={el.id} data={el} />):null


}

export default Comments;