import React, { Component } from 'react';
import {
    Switch,
    Route
}
from 'react-router-dom';
import App from './App';
import Main from './Main';
import Options from './Options';

const Game = () => (
    <App />
);

const OptionsMenu = () => (
    <Options />
);

const MainMenu = () => (
    <Main />
);

const SwitchGame = () => (
    <Switch>
            
        <Route exact path="/" component={MainMenu} />
        <Route path="/game" component={Game} />
        <Route path="/options" component={OptionsMenu} />
            
    </Switch>
);

export default SwitchGame;
