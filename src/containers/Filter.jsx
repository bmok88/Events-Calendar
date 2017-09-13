import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { event, filterTerms, addFilterTerm, removeFilterTerm } = this.props;
    let checked = true;
    if (filterTerms.indexOf(event) !== -1) {
      checked = false;
    }

    return (
      <div className="filter">
        {event}
        <input
          className="filter-checkbox"
          type="checkbox"
          checked={checked}
          value={event}
          onChange={e => {
            if (!filterTerms.includes(e.target.value)) {
              addFilterTerm(e.target.value);
            } else {
              removeFilterTerm(e.target.value);
            }
            e.target.checked = false;
            console.log(e.target.checked, 'input');
          }}
        />
      </div>
    );
  }
}

export default Filter;
