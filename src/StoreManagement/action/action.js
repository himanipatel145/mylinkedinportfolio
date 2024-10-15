export const ContactMap = {
  SUBMIT_FORM_REQUEST_START: "SUBMIT_FORM_REQUEST_START",
  SUBMIT_FORM_SUCCESS: "SUBMIT_FORM_SUCCESS",
  SUBMIT_FORM_ERROR: "SUBMIT_FORM_ERROR",
};

export const ContactActions = {
  submitContactStart: () => ({
    type: ContactMap.SUBMIT_FORM_REQUEST_START,
  }),
  submitContactSuccess: (data) => ({
    type: ContactMap.SUBMIT_FORM_SUCCESS,
    payload: data,
  }),
  submitContactError: (errors) => ({
    type: ContactMap.SUBMIT_FORM_ERROR,
    payload: errors,
  }),
};
