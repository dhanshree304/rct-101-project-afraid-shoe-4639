import React, { useState } from "react";
import "../App.css";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Thank you for connecting as , we will react out you soon");
    navigate("/");
  };

  return (
    <>
      {" "}
      <div className="contact-page-container">
        <Heading m="20px">Contact Us</Heading>
        <div className="contact-details">
          <div className="contact-info">
            <img
              src="https://www.freeiconspng.com/uploads/location-icon-png-21.png"
              alt="Location"
              className="contact-icon"
            />
            <p>3900 N 10th St McAllen TX,78501 ,Suite 1050</p>
          </div>
          <div className="contact-info">
            <img
              src="https://webstockreview.net/images/phone-icon-png-3.png"
              alt="Phone"
              className="contact-icon"
            />
            <p>+1 123 456 7890</p>
          </div>
          <div className="contact-info">
            <img
              src="https://th.bing.com/th/id/R.bb18bdbbef437b2d50518db5a8292c94?rik=cOvK7ERpnbu3Tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2femail-icon-png-download-icons-logos-emojis-email-icons-2400.png&ehk=VQKlzNVcrMc2tLSKYacLzJ9XD4bCkYGXtMrARdqSBKQ%3d&risl=&pid=ImgRaw&r=0"
              alt="Email"
              className="contact-icon"
            />
            <p>info@masaicapital.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <Heading m="20px">
          Please leave your details here, we will connect you!
        </Heading>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
