import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
    static defaultProps = {
        initValue: 0,
    };

    state = {
        value: this.props.initValue,
    };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
                };
            });
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
                };
            });
    };

    render( ) {
        return (
            <div className="counter">
                <span className="counter__value">{this.state.value}</span>
                
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

export default Counter;