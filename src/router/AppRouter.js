import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PostList from '../component/PostList'
import AddPost from '../component/AddPost'
import EditPost from '../component/EditPost'
import NotFound from '../component/NotFound'
import Header from '../component/Header'
import Container from 'react-bootstrap/Container'

const AppRouter = () => (
    <BrowserRouter>
        <Container>
            <Header />
            <Switch>
                <Route exact path="/" component={PostList} />
                <Route path="/posts/:id" component={EditPost} />
                <Route path="/posts" component={AddPost} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default AppRouter