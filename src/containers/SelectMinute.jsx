import React, { Component } from 'react';

class SelectMinute extends Component {
  state = {
    chosenMinute: ''
  };

  handleMinuteChange = e => {
    this.setState({
      chosenMinute: e.target.value
    });
  };

  render() {
    const minutes = [];

    for (let i = 0; i <= 50; i += 10) {
      let minute = i;

      if (i === 0) {
        minute = '00';
      }

      minutes.push(
        <option key={i} value={minute}>
          {minute}
        </option>
      );
    }

    return (
      <select
        value={this.state.chosenMinute}
        onChange={this.handleMinuteChange}
      >
        {minutes}
      </select>
    );
  }
}

export default SelectMinute;
