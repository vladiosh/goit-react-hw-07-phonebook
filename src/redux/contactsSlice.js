import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [addContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [action.payload, ...state.items],
        isLoading: false,
        error: null,
      };
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id),
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

// export const { addContact, deleteContact } = contactsSlise.actions;
export const contactReducer = contactsSlise.reducer;
