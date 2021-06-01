import React, { Component } from 'react';
import { connect } from "react-redux";
import './Options.css';
import { Link } from "react-router-dom";

class Options extends Component {

    updateMaxPoints = (e) => {
        this.props.dispatch({
            type: "MAX_POINTS",
            number: +e.target.value
        });
    }

    handleChange = (e) => {
        switch (e.target.value) {
            case "easy":
                this.props.dispatch({
                    type: "DIFFICULTY",
                    difficulty: 3
                });
                break;
            case "medium":
                this.props.dispatch({
                    type: "DIFFICULTY",
                    difficulty: 4
                });
                break;
            case "hard":
                this.props.dispatch({
                    type: "DIFFICULTY",
                    difficulty: 5
                });
                break;
        }
    }

    render() {
        let selected;
        switch (this.props.variants) {
            case 3:
                selected = <div>
                        <select onChange={this.handleChange} name="diffuculty" id="difficulty">
                        <option selected="selected" value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        </select>
                        </div>
                break;
            case 4:
                selected = <div>
                        <select onChange={this.handleChange} name="diffuculty" id="difficulty">
                        <option value="easy">Easy</option>
                        <option selected="selected" value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        </select>
                        </div>
                break;
            case 5:
                selected = <div>
                        <select onChange={this.handleChange} name="diffuculty" id="difficulty">
                        <option value="easy">Easy</option>
                        <option selected="selected" value="medium">Medium</option>
                        <option selected="selected" value="hard">Hard</option>
                        </select>
                        </div>
                break;
        }

        return (
            <section className="options">
                <h2 className="options__heading">Options</h2>
                
                <label for="maxpoints">Choose a maximum score </label>
                <input id="maxpoints" type="number" value={this.props.maxpoints} onChange={this.updateMaxPoints}/>
                
                <label for="difficulty">Choose the difficulty:</label>

                {selected}
                
                <div className="main__button">
                    <h2><Link className="main__button-text" to="/game">Play</Link></h2>
                </div>
        </section>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        maxpoints: reduxState.maxpoints,
        variants: reduxState.variants
    };
}


export default connect(mapStateToProps)(Options);
