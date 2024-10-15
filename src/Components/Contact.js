import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitContactForm } from "../StoreManagement/api/contactAPI";
import errorMessages from "../StoreManagement/action/errorMessages";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    opportunity: "",
    companyName: "",
    message: "",
    contactNumber: "",
    files: null,
    errors: {},
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: name === "files" ? files[0] : value,
      errors: { ...contactFormData.errors, [name]: "" },
    });
  };

  const validateForm = () => {
    let errors = {};
    const { name, email, opportunity, companyName, message, contactNumber } =
      contactFormData;

    if (!name) {
      errors.name = errorMessages.PROVIDE_NAME || "Please fill the name field.";
    }
    if (!email) {
      errors.email =
        errorMessages.PROVIDE_EMAIL || "Please fill the email field.";
    }
    if (!opportunity) {
      errors.opportunity =
        errorMessages.PROVIDE_OPPORTUNITY ||
        "Please select an opportunity type.";
    }
    if (!companyName) {
      errors.companyName =
        errorMessages.PROVIDE_COMPANYNAME ||
        "Please fill the company name field.";
    }
    if (!message) {
      errors.message =
        errorMessages.PROVIDE_MESSAGE || "Please fill the message field.";
    }
    if (!contactNumber) {
      errors.contactNumber =
        errorMessages.PROVIDE_MOBILE_NUMBER ||
        "Please fill the contact number field.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setContactFormData({ ...contactFormData, errors });
      return;
    }

    const formData = new FormData();
    formData.append("name", contactFormData.name);
    formData.append("email", contactFormData.email);
    formData.append("opportunity", contactFormData.opportunity);
    formData.append("companyName", contactFormData.companyName);
    formData.append("message", contactFormData.message);
    formData.append("contactNumber", contactFormData.contactNumber);
    formData.append("files", contactFormData.files);

    try {
      await dispatch(submitContactForm(formData));
      setContactFormData({
        name: "",
        email: "",
        opportunity: "",
        companyName: "",
        message: "",
        contactNumber: "",
        files: "",
        errors: {},
      });
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section className="section" id="contact">
      <h3 className="section__text__p1">Get in Touch</h3>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={contactFormData.name}
              onChange={handleInput}
            />
            {contactFormData.errors.name && (
              <p className="error-message">{contactFormData.errors.name}</p>
            )}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={contactFormData.email}
              onChange={handleInput}
            />
            {contactFormData.errors.email && (
              <p className="error-message">{contactFormData.errors.email}</p>
            )}

            <label htmlFor="opportunity">
              Select Opportunity Type <span className="text-danger">*</span>
            </label>
            <select
              id="opportunity"
              name="opportunity"
              value={contactFormData.opportunity}
              onChange={handleInput}
              className="contact-form-select"
            >
              <option value="" disabled>
                Select option for...
              </option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelancing Work</option>
            </select>
            {contactFormData.errors.opportunity && (
              <p className="error-message">
                {contactFormData.errors.opportunity}
              </p>
            )}

            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Your company name"
              value={contactFormData.companyName}
              onChange={handleInput}
            />
            {contactFormData.errors.companyName && (
              <p className="error-message">
                {contactFormData.errors.companyName}
              </p>
            )}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              value={contactFormData.message}
              onChange={handleInput}
            />
            {contactFormData.errors.message && (
              <p className="error-message">{contactFormData.errors.message}</p>
            )}

            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Your contact number"
              value={contactFormData.contactNumber}
              onChange={handleInput}
            />
            {contactFormData.errors.contactNumber && (
              <p className="error-message">
                {contactFormData.errors.contactNumber}
              </p>
            )}

            <label htmlFor="files">Attach Files</label>
            <input
              type="file"
              id="files"
              name="files"
              className="file-input"
              onChange={handleInput}
              accept="*/*"
            />

            <div
              className="button-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button className="btn btn-color-2 " type="submit">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-color-2 clear-btn "
                onClick={() =>
                  setContactFormData({
                    name: "",
                    email: "",
                    opportunity: "",
                    companyName: "",
                    message: "",
                    contactNumber: "",
                    files: null,
                    errors: {},
                  })
                }
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
