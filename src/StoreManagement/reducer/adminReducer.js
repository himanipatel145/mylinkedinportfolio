import { ContactListsMap } from "../action/adminAction";

const initialState = {
  isLoading: false,
  contactLists: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactListsMap.CONTACT_LISTS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ContactListsMap.CONTACT_LISTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        contactLists: action.payload.data,
      };
    }
    case ContactListsMap.CONTACT_LISTS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ContactListsMap.DELETE_CONTACT_LISTS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ContactListsMap.DELETE_CONTACT_LISTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        contactLists: {},
      };
    }
    case ContactListsMap.DELETE_CONTACT_LISTS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
