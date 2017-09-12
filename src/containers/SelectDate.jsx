import React, { Component } from 'react';
import { connect } from 'react-redux';

const SelectDate = ({ date, onChooseDateClick }) => {
  const dates = [];

  for (let i = 1; i <= 31; i++) {
    dates.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <select
      value={date.toString()}
      onChange={e => {
        e.preventDefault();
        onChooseDateClick(e.target.value);
      }}
    >
      {dates}
    </select>
  );
};

const mapStateToProps = state => {
  return {
    date: state.date
  };
};

export default connect(mapStateToProps)(SelectDate);
