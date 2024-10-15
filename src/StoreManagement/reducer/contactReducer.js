import { ContactMap } from "../action/action";

const initialState = {
  isLoading: false,
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactMap.SUBMIT_FORM_REQUEST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ContactMap.SUBMIT_FORM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ContactMap.SUBMIT_FORM_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
