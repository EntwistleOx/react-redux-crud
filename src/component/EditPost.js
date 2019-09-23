import React from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { updatePost } from '../actions/posts'

const EditPost = (props) => (
    <div>
        <PostForm 
            post={props.post}
            onSubmit={(post) => {
                props.dispatch(updatePost(props.post.id, post))
                props.history.push('/')
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => post.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditPost)

