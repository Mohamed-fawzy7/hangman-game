import React, { Component } from 'react'

export class AlphaButtons extends Component {
    static defaultProps = {
        letters : 'abcdefghijklmnopqrstuvwxyz'
    }
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.props.handleGuess}
                disabled={this.props.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }
    render() {
        return (
            <div>
                {this.generateButtons()}
            </div>
        )
    }
}

export default AlphaButtons
