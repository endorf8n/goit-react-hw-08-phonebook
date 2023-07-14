import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  getContactsThunk,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isEditing: false,
  currentContact: {
    name: null,
    number: null,
    id: null,
  },
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    toggleEditing: state => {
      state.isEditing = !state.isEditing;
    },
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        state.items = state.items.map(contact => {
          return contact.id === action.payload.id ? action.payload : contact;
        });
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { toggleEditing, setCurrentContact } = contactsSlice.actions;
