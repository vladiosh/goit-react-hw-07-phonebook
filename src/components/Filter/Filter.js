import React from 'react';
import { FilterLabel, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';

import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(changeFilter(value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <Input type="text" onChange={handleChange}></Input>
    </FilterLabel>
  );
};

export default Filter;
