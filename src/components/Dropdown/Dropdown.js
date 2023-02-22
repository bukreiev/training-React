import React, {Component} from 'react';
import './Dropdown.css';

class Dropdown extends Component {
   state = {
      visible: false,
   };

   toggle = () => {
      this.setState(prevState => ({
         visible: !prevState.visible,
      }));
   };

   render() {
      return (
         <div className="dropdown">
            <button
               type="button"
               className="dropdown__show"
                onClick={this.toggle}
            >
               {this.state.visible ? 'Hide' : 'Show'}
            </button>

            {this.state.visible && (
               <div className="dropdown__menu">Dropdown menu</div>
            )}
         </div>
      );
   }
}

export default Dropdown;
