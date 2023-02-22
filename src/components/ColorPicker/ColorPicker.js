import React, {Component} from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    };

    setActiveIdx = (index) => {
        this.setState({ activeOptionIdx: index })
    };

    makeOptionsClassName = (index) => {
        const optionsClasses = ['colorPicker__option'];
        if (index === this.state.activeOptionIdx) {
            optionsClasses.push(
                'colorPicker__option--active'
            );
        }
        return optionsClasses.join(' ')
    };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const {label} = options[activeOptionIdx];
        
        return (
          <div className="colorPicker">
            <h2 className="colorPicker__title">Color Picker</h2>
            <p className="currentColor">
                    Current color is: {label}
            </p>
            <div className="colorPicker__colors">
              {options.map(({ label, color }, index) => (
                <button
                  key={label}
                  className={this.makeOptionsClassName(index)}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => this.setActiveIdx(index)}
                ></button>
              ))}
            </div>
          </div>
        );
    };
};

export default ColorPicker

