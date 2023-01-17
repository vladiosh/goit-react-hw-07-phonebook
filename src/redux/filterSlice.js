import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter: {
      reducer(_, action) {
        return action.payload;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { changeFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
