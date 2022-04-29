import React from 'react';
import ReactDOM from 'react-dom';
// this is the only place Reactdom would be imported.

import App from './App';
import './index.css';
//both files will be created

ReactDOM.render(<App />, document.getElementById('root'));
//this is used for connecting our App straight to the div with an id of root.
