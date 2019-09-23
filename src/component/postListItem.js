import React from 'react'
import Card from 'react-bootstrap/Card'
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
            <div>
                <Card className="mb-3">
                    <Card.Body>
                        <Link to={`posts/${id}`}>{title}</Link>
                        <Button 
                            className="btn btn-danger"
                            onClick={ this.onDelete }  
                        >Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deletePost
}
export default connect(null, mapDispatchToProps)(PostList)