import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { ContactReducer } from "../reducer/contactReducer";
import { adminReducer } from "../reducer/adminReducer";

const rootReducer = combineReducers({
  contact: ContactReducer,
  admin: adminReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
