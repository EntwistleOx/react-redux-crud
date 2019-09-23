import React from 'react'
import { connect } from 'react-redux'
import PostItem from './PostListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const PostList = (props) => (
    <div>
        <section>
            <h4>UFO Sighting</h4>
            { 
                props.posts.length === 0 ? 
                <Card className="text-center">
                <Card.Body>
                    <Card.Title>There are no sightings yet</Card.Title>
                    <Card.Text>
                    Let add some content now!
                    </Card.Text>
                    <Link to="/posts" class="btn btn-primary">Add new sighting</Link>
                </Card.Body>
                </Card>
                : 
                <ListGroup>
                    {props.posts.map((post) => {
                        return <PostItem key={post.id} {...post} />
                    })}
                </ListGroup>
            }
        </section>
    </div>
);

const mapStateToProps = (state) => ({
    posts: state.posts
})
export default connect(mapStateToProps)(PostList)