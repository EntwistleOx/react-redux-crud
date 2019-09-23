import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PostList from '../component/PostList'
import PostDetails from '../component/PostDetails'
import PostForm from '../component/PostForm'
import NotFound from '../component/NotFound'
import Container from 'react-bootstrap/Container'

const AppRouter = () => (
    <BrowserRouter>
        <Container>
            <Switch>
                <Route exact path="/" component={PostList} />
                <Route path="/posts/:id" component={PostDetails} />
                <Route path="/posts" component={PostForm} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default AppRouter