import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import App from './components/App/app'; 
import Obligations from './components/Obligations/obligations';

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-bootstrap.css";

/*// Render takes two args ( what and where)*/
ReactDOM.render(
    <BrowserRouter>
        {/*// rendering App from App.js*/}
        <App />
    </BrowserRouter>, document.getElementById('root')
);


