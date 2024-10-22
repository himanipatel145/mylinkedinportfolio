import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  allContactFormData,
  deleteContactData,
} from "../../StoreManagement/api/adminAPI";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactManagement = () => {
  const dispatch = useDispatch();
  const { contactLists } = useSelector((state) => state.admin, shallowEqual);
  const [copiedIndex, setCopiedIndex] = useState(null); // State to track which email was copied

  const deleteContact = (id) => {
    console.log("id", id);
    dispatch(deleteContactData(id));
  };
  useEffect(() => {
    dispatch(allContactFormData());
  }, [dispatch]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column vh-100">
        <nav className="nav flex-column">
          <Link to="/user-management" className="nav-link nav-item-custom">
            User Management
          </Link>
          <Link to="/admin-management" className="nav-link nav-item-custom">
            Admin Management
          </Link>
          <Link to="/data-management" className="nav-link nav-item-custom">
            Data Management
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content p-4 w-100">
        <div className="contact-list">
          <h4 className="mb-4">Contact Data Lists</h4>
          <div className="table-responsive">
            <table className="table table-striped table-hover mx-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Opportunity</th>
                  <th>Company Name</th>
                  <th>Message</th>
                  <th>Contact Number</th>
                  <th>Files</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contactLists?.length > 0 ? (
                  contactLists.map((item, index) => (
                    <tr key={item._id || index}>
                      <td>{item.name}</td>
                      <td className="email-column">
                        <CopyToClipboard
                          text={item.email}
                          onCopy={() => {
                            setCopiedIndex(index); // Set copied index to show which email was copied
                            setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
                          }}
                        >
                          <span
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                          >
                            {item.email}
                          </span>
                        </CopyToClipboard>
                        {copiedIndex === index && (
                          <div className="copied-message">Copied!</div> // Wrapped in a div
                        )}
                      </td>

                      <td>{item.opportunity}</td>
                      <td>{item.companyName}</td>
                      <td>{item.message}</td>
                      <td>{item.contactNumber}</td>
                      <td>
                        {item.files ? (
                          <a
                            href={item.files}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                        ) : (
                          "No File"
                        )}
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <button className="btn btn-primary square-btn me-2">
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button
                            className="btn btn-danger square-btn"
                            onClick={() => deleteContact(item._id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      No contacts available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactManagement;
