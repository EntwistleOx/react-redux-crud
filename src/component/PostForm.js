import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'

class PostForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: props.post ? props.post.title : '',
            content: props.post ? props.post.content : '',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState({title})
    }

    onContentChange = (e) => {
        const content = e.target.value
        this.setState({content})
    }

    canBeSubmitted = () => {
        const { title, content } = this.state
        return title.length > 0 && content.length > 0
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.title || !this.state.content) {
            this.setState({error: 'Please check your data'})
        }else{
            this.setState({error: ''})
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content
            })
        }
    }

    render() {
        const isEnabled = this.canBeSubmitted()
        return (
            <div>
                <section>
                    <Card>
                        <Card.Body>
                            { this.state.error && <Alert variant="danger">{this.state.error}</Alert> }
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter title" 
                                        value={this.state.title}
                                        onChange={this.onTitleChange}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicContent">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows="3" 
                                        placeholder="Enter content"
                                        value={this.state.content}
                                        onChange={this.onContentChange}
                                    />
                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary" type="submit" disabled={!isEnabled}>
                                        Submit
                                    </Button>
                                    <Link to="/" className="btn btn-danger">Cancel</Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </section>
            </div>
        )
    }
}


export default PostForm