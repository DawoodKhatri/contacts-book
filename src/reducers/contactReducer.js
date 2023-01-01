export const ContactReducer = (
  state = { contacts: [], search: null },
  action
) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload].sort((a, b) =>
          a.name < b.name ? -1 : 1
        ),
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DEL_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "SEARCH_CONTACT":
      return {
        ...state,
        search: state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "RESET_SEARCH":
      return {
        ...state,
        search: null,
      };
    default:
      return state;
  }
};
