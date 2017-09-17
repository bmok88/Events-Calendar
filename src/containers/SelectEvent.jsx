import React, { Component } from 'react';

class SelectEvent extends Component {
  state = {
    chosenEvent: ''
  };

  handleEventChange = e => {
    this.setState({
      chosenEvent: e.target.value
    });
  };

  render() {
    const events = ['Birthday', 'Holiday', 'Company Event', 'Miscellaneous'];

    return (
      <div>
        <select
          value={this.state.chosenEvent}
          onChange={this.handleEventChange}
        >
          {events.map((event, i) => {
            return (
              <option key={i} value={event}>
                {event}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectEvent;
