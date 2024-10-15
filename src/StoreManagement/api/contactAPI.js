import { ContactActions } from "../action/action";
import axios from "axios";
import { toast } from "react-toastify";

export const submitContactForm = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(ContactActions.submitContactStart());
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/contactMe`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(ContactActions.submitContactSuccess(data));
      toast.success(
        data.message || "Your contact details have been submitted successfully!"
      );
    } catch (error) {
      dispatch(
        ContactActions.submitContactError(
          error?.response?.data || error?.message
        )
      );
      toast.error(
        error.response.data.message || "An error occurred. Please try again."
      );
    }
  };
};
