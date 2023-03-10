import { createSlice } from '@reduxjs/toolkit';

import * as actions from './contact-actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.fetchAllContactsLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchAllContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(actions.fetchAllContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(actions.fetchAddContactLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchAddContactSuccess, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(actions.fetchAddContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(actions.fetchDeleteContactLoading, store => {
        store.loading = true;
      })
      .addCase(actions.fetchDeleteContactSuccess, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(actions.fetchDeleteContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
