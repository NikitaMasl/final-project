import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import { pokemonReducer } from './store/reducerAction';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const COUGHT_POKEMON = 'COUGHT_POKEMON';
export const store = createStore(pokemonReducer);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

