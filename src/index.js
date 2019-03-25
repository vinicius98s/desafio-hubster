import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import middlewares from './middlewares';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.register();
