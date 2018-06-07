/*!
 *
 * Angle - Bootstrap Admin App + ReactJS
 *
 * Version: @version@
 * Author: @author@
 * Website: @url@
 * License: @license@
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';

// Start Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));
