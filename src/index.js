import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react'
import birdStore from './Stores/BirdStore'

const root=(
    <Provider birdStore={birdStore}>
        <App />
    </Provider>
)
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
