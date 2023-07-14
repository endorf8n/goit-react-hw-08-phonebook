import { createSelector } from '@reduxjs/toolkit';

export const selectContatcs = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectIsEditing = state => state.contacts.isEditing;
export const selectCurrentContact = state => state.contacts.currentContact;

export const selectFilteredContacts = createSelector(
  [selectContatcs, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
