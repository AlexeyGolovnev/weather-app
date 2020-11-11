import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render( 
    <React.StrictMode >
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);