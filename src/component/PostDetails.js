import React from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const PostDetails = () => (
    <div>
    <Header />
    <section>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter content" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    <Button variant="danger" type="submit">
                        Cancel
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </section>
</div>
);

export default PostDetails

