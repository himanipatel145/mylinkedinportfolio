import { ContactListsActions } from "../action/adminAction";
import axios from "axios";
import { toast } from "react-toastify";

export const allContactFormData = () => {
  return async (dispatch) => {
    try {
      dispatch(ContactListsActions.contactListsStart());
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/getAllDetails`,
      });
      dispatch(ContactListsActions.contactListsSuccess(data));
      // toast.success(
      //   data?.message || "Your contact details fetched successfully!"
      // );
    } catch (error) {
      dispatch(ContactListsActions.contactListsError(error?.message));
      toast.error("An error occurred. Please try again.");
    }
  };
};

export const deleteContactData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(ContactListsActions.deleteContactListsStart());
      const { data } = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_API_URL}/admin/deleteContact/${id}`,
      });
      dispatch(ContactListsActions.deleteContactListsSuccess());
      toast.success(
        data?.message || "Your contact details fetched successfully!"
      );
    } catch (error) {
      dispatch(ContactListsActions.deleteContactListsError(error?.message));
      toast.error("An error occurred. Please try again.");
    }
  };
};
