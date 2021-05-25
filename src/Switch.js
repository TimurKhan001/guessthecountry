import React, { Component } from 'react';
import {
    Switch,
    Route
}
from 'react-router-dom';
import App from './App';
import Main from './Main';

const Game = () => (
    <App/>
);

const Options = () => (
    <div>Options</div>
);

const MainMenu = () => (
    <Main />
);

const SwitchGame = () => (
    <Switch>
        
            <Route exact path="/" component={MainMenu} />
            <Route path="/game" component={Game} />
            <Route path="/options" component={Options} />
            
        </Switch>
);

export default SwitchGame;
