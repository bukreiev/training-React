import React from 'react';
import './Counter.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div className="counter__controls">
        <button type="button"
            className="counter__button"
            onClick={onIncrement}>
            Increment on 1
        </button>
        <button type="button"
            className="counter__button"
            onClick={onDecrement}>
            Decrement on 1
        </button>
    </div>
);

export default Controls;