import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        return state.filter(({ id }) => id !== action.payload);
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactReducer = contactsSlise.reducer;
