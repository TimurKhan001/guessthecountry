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
        
    </section>
);


export default Main;
