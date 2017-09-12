import React, { Component } from 'react';

class SelectMonth extends Component {
  state = {
    currentMonth: ''
  };

  handleMonthChange = e => {
    this.setState({
      currentMonth: e.target.value
    });
  };

  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const currentMonth =
      this.state.currentMonth || months[new Date().getMonth()];

    return (
      <select value={currentMonth} onChange={this.handleMonthChange}>
        {months.map((month, i) => {
          return (
            <option key={i} value={month}>
              {month}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectMonth;
