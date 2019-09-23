import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions/posts'

const PostList = (props) => (
    <ListGroup.Item className="d-flex align-items-center"> 
        <div className="flex-grow-1">
            {props.title}
        </div>
        <Link to={`posts/${props.id}`} className="btn btn-info mr-1">Edit</Link>
        <Button 
            className="btn btn-danger"
            onClick={props.deletePost}  
        >Delete</Button>
    </ListGroup.Item>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePost: () => dispatch(deletePost(ownProps.id))
})
export default connect(null, mapDispatchToProps)(PostList)