import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import PostItem from './postListItem'

const PostList = (props) => (
    <div>
        <Header />
        <section>
            <h2>Posts</h2>
            {props.posts.map((post) => {
                return <PostItem key={post.id} {...post} />
            })}
        </section>
    </div>
);

const mapStateToProps = (state) => ({
    posts: state.posts
})
export default connect(mapStateToProps)(PostList)