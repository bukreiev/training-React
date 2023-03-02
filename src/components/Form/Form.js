import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Form.module.css'

export default class Form extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
  };

  state = {
    name: '',
    tag: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.prevantDefault();
    
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.state({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          <p className={css.text}>Name</p>
          <input
            type="text"
            name="name"
            className={css.input}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          <p className={css.text}>NickName</p>
          <input
            type="text"
            name="tag"
            className={css.input}
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={css.btn}>
          Submit
        </button>
      </form>
    );
  }
}
