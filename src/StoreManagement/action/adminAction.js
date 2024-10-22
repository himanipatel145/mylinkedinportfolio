export const ContactListsMap = {
  CONTACT_LISTS_START: "CONTACT_LISTS_START",
  CONTACT_LISTS_SUCCESS: "CONTACT_LISTS_SUCCESS",
  CONTACT_LISTS_ERROR: "CONTACT_LISTS_ERROR",
  DELETE_CONTACT_LISTS_START: "DELETE_CONTACT_LISTS_START",
  DELETE_CONTACT_LISTS_SUCCESS: "DELETE_CONTACT_LISTS_SUCCESS",
  DELETE_CONTACT_LISTS_ERROR: "DELETE_CONTACT_LISTS_ERROR",
};

export const ContactListsActions = {
  contactListsStart: () => ({
    type: ContactListsMap.CONTACT_LISTS_START,
  }),
  contactListsSuccess: (data) => ({
    type: ContactListsMap.CONTACT_LISTS_SUCCESS,
    payload: data,
  }),
  contactListsError: (errors) => ({
    type: ContactListsMap.CONTACT_LISTS_ERROR,
    payload: errors,
  }),
  deleteContactListsStart: () => ({
    type: ContactListsMap.DELETE_CONTACT_LISTS_START,
  }),
  deleteContactListsSuccess: (data) => ({
    type: ContactListsMap.DELETE_CONTACT_LISTS_SUCCESS,
    payload: data,
  }),
  deleteContactListsError: (errors) => ({
    type: ContactListsMap.DELETE_CONTACT_LISTS_ERROR,
    payload: errors,
  }),
};
