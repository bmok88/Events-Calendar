import React, { Component } from 'react';

class SelectAMPM extends Component {
  state = {
    ampm: 'AM'
  };

  handleAMPMChange = e => {
    this.setState({
      ampm: e.target.value
    });
  };

  render() {
    return (
      <select value={this.state.ampm} onChange={this.handleAMPMChange}>
        <option value="am">am</option>
        <option value="pm">pm</option>
      </select>
    );
  }
}

export default SelectAMPM;
