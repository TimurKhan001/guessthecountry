import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            answer: {},
            correct: 0,
            incorrect: 0,
            maxpoints: 10,
            variants: 4
        };

        this.handleClick = this.handleClick.bind(this);
    }

    fetch = () => {
        let variants = this.state.variants;
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
        if (this.state.correct === this.state.maxpoints) {
            alert("You won the game");
            this.setState({ correct: 0, incorrect: 0 });
        }
        else if (this.state.incorrect === this.state.maxpoints) {
            alert("Sorry you lost");
            this.setState({ correct: 0, incorrect: 0 });
        }
    }

    updateMaxPoints = (e) => {
        this.setState({
            maxpoints: +e.target.value
        });
    }

    render() {
        let countries = this.state.chosen;
        let showCountries = countries.map((item, index) => (
            <div style={{padding: "20px"}} key={index}>{item.name}</div>
        ));

        return (
            <div className="App">
                <h2 onClick={this.handleClick} style={{cursor: "pointer"}}>{showCountries}</h2>
                <img style={{width: "300px"}} src={this.state.answer.flag} alt="country flag"/>
                <h3>Correct {this.state.correct}</h3>
                <h3>Wrong {this.state.incorrect}</h3>
                
                <label for="maxpoints">Choose a maximum score </label>
                <input id="maxpoints" type="number" value={this.state.maxpoints} onChange={this.updateMaxPoints}/>
                
            </div>
        );
    }
}

export default App;
