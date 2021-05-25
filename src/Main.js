import React, { Component } from 'react';
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => (
    <section className="main__menu">
        
        <div className="main__button">
            <h2><Link className="main__button-text" to="/game">Play</Link></h2>
        </div>
        
        <div className="main__button">
            <h2><Link className="main__button-text" to="/options">Options</Link></h2>
        </div>
        
        <div className="main__info">
            <p className="main__info-text">
                Can you identify a country by it’s flag?
                Click “play” to try!<br/>
                You can change the difficulty in the options menu. 
            </p>
        </div>
    </section>

);


export default Main;
