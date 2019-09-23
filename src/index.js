import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPost, fetchPosts, fetchPost, deletePost } from './actions/posts'
const store = configureStore()

store.dispatch(createPost({title: 'Test 1', content: 'Lorem ipsum atravilis 1'}))
store.dispatch(createPost({title: 'Test 2', content: 'Lorem ipsum atravilis 2'}))
store.dispatch(createPost({title: 'Test 3', content: 'Lorem ipsum atravilis 3'}))
store.dispatch(createPost({title: 'Test 4', content: 'Lorem ipsum atravilis 4'}))

// store.dispatch(fetchPosts())

// store.dispatch(fetchPost(postOne.post.id))

// store.dispatch(deletePost(postOne.post.id))

// store.dispatch(fetchPosts())

ReactDOM.render(
                <Provider store={store}>
                    <AppRouter />
                </Provider>, 
                document.getElementById('root'));

                