import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Modal from 'react-awesome-modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            answer: {},
            correct: 0,
            incorrect: 0,
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    fetch = () => {
        let variants = this.props.variants;
        const url = "https://restcountries.eu/rest/v2/all";
        window.fetch(url)
            .then(data => data.json())
            .then(result => result.sort(() => Math.random() - Math.random()).slice(0, variants))
            .then(chosen => this.setState({ chosen: chosen, answer: chosen[Math.floor(Math.random() * variants)] }));
    }

    componentDidMount() {
        this.fetch();
    }

    handleClick(e) {
        if (e.target.innerText === this.state.answer.name) {
            alert("Correct");
            this.fetch();
            this.setState(prevState => ({
                correct: prevState.correct + 1
            }));
        }
        else {
            alert(`No, the correct answer is ${this.state.answer.name}`);
            this.fetch();
            this.setState(prevState => ({
                incorrect: prevState.incorrect + 1
            }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.correct === this.props.maxpoints) {
            alert("You won the game");
            this.setState({ correct: 0, incorrect: 0 });
        }
        else if (this.state.incorrect === this.props.maxpoints) {
            alert("Sorry you lost");
            this.setState({ correct: 0, incorrect: 0 });
        }
    }


    render() {
        let countries = this.state.chosen;
        let showCountries = countries.map((item, index) => (
            <div className="game__country-name" onClick={this.handleClick} style={{padding: "20px", cursor: "pointer"}} key={index}>
                <h2>{item.name}</h2>
            </div>
        ));

        return (
            <div className="App">
            
                <div className="game__image">
                <img style={{height: "25vh"}} src={this.state.answer.flag} alt="country flag"/>
                </div>
                
                
                <div className="game__countries">{showCountries}</div>
                
                
                <h3 style={{ margin: "1rem", textAlign: "center"}}>Correct {this.state.correct}</h3>
                <h3 style={{ margin: "1rem", textAlign: "center"}}>Wrong {this.state.incorrect}</h3>
                <h3 style={{ margin: "1rem", textAlign: "center"}}>Max Score {this.props.maxpoints}</h3>
                
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        maxpoints: reduxState.maxpoints,
        variants: reduxState.variants
    };
}

export default connect(mapStateToProps)(App);
