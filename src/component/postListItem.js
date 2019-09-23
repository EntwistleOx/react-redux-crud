import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions/posts'

class PostList extends React.Component{

    onDelete = () => {
        this.props.deletePost(this.props.id)
    }

    render() {
        const {id, title} = this.props
        return (
            <ListGroup.Item className="d-flex align-items-center"> 
                <div className="flex-grow-1">
                    {title}
                </div>
                <Link to={`posts/${id}`} className="btn btn-info mr-1">Edit</Link>
                <Button 
                    className="btn btn-danger"
                    onClick={ this.onDelete }  
                >Delete</Button>
               
            </ListGroup.Item>
        )
    }
}

const mapDispatchToProps = {
    deletePost
}
export default connect(null, mapDispatchToProps)(PostList)