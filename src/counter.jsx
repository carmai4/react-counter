import React, { Component } from 'react';

export default class Counter extends Component {
    state = { value: 0 };
    render() {
        return (
            <div>
                <span className="default"><code>Count: {this.state.value}</code></span>
                <div>
                    <button onClick={this.handleIncrement}> Increment </button>
                    <button onClick={this.handleDecrement}> Decrement </button>
                    <button onClick={this.handleSurprise}> Surprise Me </button>
                </div>
                <div>
                    <button onClick={this.reset}> Reset </button>
                </div>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    handleSurprise = () => {
        const value = this.state.value;
        const rand = Math.floor(Math.random() * 99999 + 1);
        let newValue;
        switch (rand % 5) {
            case 0:
                newValue = (value + 3) * 2;
                break;
            case 1:
                newValue = Math.floor(value / 3);
                break;
            case 2:
                newValue = Math.floor(Math.random() * 10 * value);
                break;
            case 3:
                newValue = Math.abs(value + 5);
                break;
            case 4:
                newValue = Math.floor((value + 2) / 2);
                break;
            default:
                break;
        }
        this.setState({ value: newValue });
    }

    reset = () => {
        this.setState({ value: 0 });
    }
}
