import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore()

ReactDOM.render(
                <Provider store={store}>
                    <AppRouter />
                </Provider>, 
                document.getElementById('root'));