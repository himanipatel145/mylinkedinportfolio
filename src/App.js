import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AllContabctDetails from "./Components/ContactDetails/AllContactDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/all-contacts" element={<AllContactDetails />} /> */}
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
