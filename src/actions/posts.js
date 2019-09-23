import uuid from 'uuid'
// ACTION TYPES
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

// ACTION CREATOR
/* Create Post */
export const createPost = ({title='',content=''}) => ({
    type: 'CREATE_POST',
    post: {
        id: uuid(),
        title,
        content
    }
})

export const fetchPosts = () => ({
    type: 'FETCH_POSTS'
})

export const fetchPost = (id) => ({
    type: 'FETCH_POST',
    id
})

export const updatePost = ({id, title, content}) => ({
    type: 'UPDATE_POST',
    id,
    title,
    content
})

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id
})