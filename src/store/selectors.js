import { createSelector } from "@reduxjs/toolkit";

export const selectItems = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter;
export const selectIsAdding = (state) => state.contacts.isAdding;
export const selectIsDeleting = (state) => state.contacts.isDeleting;

export const selectFiltedItems = createSelector([selectItems, selectFilter], (items, filter) => 
    items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
)