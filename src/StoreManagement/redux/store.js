import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { ContactReducer } from "../reducer/contactReducer";

const store = createStore(ContactReducer, applyMiddleware(thunk));

export default store;
