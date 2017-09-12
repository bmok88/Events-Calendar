import React, { Component } from 'react';

import Week from '../containers/Week';

const Month = () => {
  const renderWeeks = () => {
    const weeks = [];

    for (let i = 1; i < 5; i++) {
      weeks.push(<Week key={i} week={i} />);
    }

    return weeks;
  };

  return <tbody>{renderWeeks()}</tbody>;
};

export default Month;
