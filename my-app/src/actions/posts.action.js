export const GET_POSTS = 'GET_POSTS';
export const CURRENT_POSTS = 'CURRENT_POSTS';

export function getPosts(posts) {
    return { 
        type: GET_POSTS, 
        payload: posts 
    }
}

export function getCurrentPost(post) {
    return { 
        type: CURRENT_POSTS, 
        payload: post 
    }
}