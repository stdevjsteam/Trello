import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router} from 'react-router-dom';

import store from './store';

import App from './components/App';

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));