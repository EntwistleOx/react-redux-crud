import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import PostForm from './PostForm'

const AddPost = (props) => (
    <div>
        <PostForm 
            onSubmit={(post) => {
                props.dispatch(createPost(post))
                props.history.push('/')
            }} 
        />
    </div>
);

export default connect()(AddPost)