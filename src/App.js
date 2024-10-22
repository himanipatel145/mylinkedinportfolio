import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/adminstyle.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactManagement from "./Components/AdminPanelComponents/ContactManagement";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin/all-contacts" element={<ContactManagement />} />
          {/* <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/admin-management" element={<AdminManagement />} /> */}
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
