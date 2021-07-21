import React from "react";
import styles from './Input.module.css'

export default class Input extends React.Component {
    state = {
      value: "",
    };
  
    handleInputChange = (e) => {
      e.stopPropagation();
      this.setState({
        value: e.target.value,
      });
  
      this.props.onChange(e.target.value);
    };
  
    render() {
      const { type, value, placeholder, name, onClick } = this.props;
      const { value: stateValue } = this.state;
  
      return (
        <input
          className={styles.inputStyle}
          type={type}
          value={typeof value === "undefined" ? stateValue : value}
          placeholder={placeholder}
          name={name}
          onChange={this.handleInputChange}
          onClick={onClick}
        />
      );
    }
  }