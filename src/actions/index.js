export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const editContact = (contact) => {
  return {
    type: "EDIT_CONTACT",
    payload: contact,
  };
};

export const delContact = (id) => {
  return {
    type: "DEL_CONTACT",
    payload: id,
  };
};

export const searchcontact = (query) => {
  return {
    type: "SEARCH_CONTACT",
    payload: query,
  };
};

export const resetSearch = () => {
  return {
    type: "RESET_SEARCH",
  };
};
