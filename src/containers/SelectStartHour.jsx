import React, { Component } from 'react';

class SelectStartHour extends Component {
  state = {
    chosenHour: ''
  };

  handleHourChange = e => {
    this.setState({
      chosenHour: e.target.value
    });
  };

  render() {
    const hours = [];

    for (let i = 1; i <= 12; i++) {
      hours.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <select value={this.state.chosenHour} onChange={this.handleHourChange}>
        {hours}
      </select>
    );
  }
}

export default SelectStartHour;
