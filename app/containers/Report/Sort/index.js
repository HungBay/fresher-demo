import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

SortData.propTypes = {};

function SortData({ data, onChange, by, array }) {
  const [sortData, setSortData] = useState({ by, value: 1 });

  const onSort = (sortBy, sortValue) => {
    setSortData({
      ...sortData,
      by: sortBy,
      value: sortValue,
    });
  };
  const onChangeFilter = evt => {
    const { target } = evt;
    const { value } = target;
    if (value === 'orderDate_desc') {
      onSort('orderDate', 1);
    } else if (value === 'orderDate_asc') {
      onSort('orderDate', -1);
    }
  };

  return (
    <select onChange={onChangeFilter}>
      {array.map(res => (
        <option value={res.value}>{res.label}</option>
      ))}
    </select>
  );
}

export default compose(memo)(SortData);
