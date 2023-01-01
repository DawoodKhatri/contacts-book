import { createReducer } from "@reduxjs/toolkit";

export const contactReducer = createReducer(
  { contacts: [] },
  {
    add: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload].sort((a, b) =>
        a.name < b.name ? -1 : 1
      ),
    }),
    edit: (state, action) => ({
      ...state,
      contacts: state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      ),
    }),
    delete: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(
        (contact) => contact.id !== action.payload
      ),
    }),
    search: (state, action) => ({
      ...state,
      search: action.payload
        ? state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : null,
    }),
  }
);