import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//import rootReducer from './reducers/score';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer:rootReducer, 
    middleware,
});
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);