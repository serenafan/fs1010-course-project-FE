import React from "react";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contatNo, setcontatNo] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  const formSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/contact_form/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        contatNo,
        subject,
        comments,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(
        `Oops! Error: ${payload.message} for fields: ${payload.invalid.join(
          ","
        )}`
      );
    } else {
      alert(`Congrats! Submission submitted with id: ${payload.id}`);
    }
  };
  return (
    <main className="contact-form">
      <section>
        <form>
          <div>
            <h1 className="font">Get in touch</h1>
            <p style={{ lineHeight: "1.5" }}>
              Send me a message using the form below, and I'll get back to you
              as soon as possible.
            </p>
          </div>
          <div className="g-1">
            <label className="label-firstname">First Name*</label>
            <input
              className="form-field font"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="g-1">
            <label className="label-lastname">Last Name</label>
            <input
              className="form-field font"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="g-1">
            <label className="label-email">Email*</label>
            <input
              className="form-field font"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="g-1">
            <label className="label-phone">Contact No.</label>
            <input
              className="form-field font"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Contact No."
              value={contatNo}
              onChange={(e) => setcontatNo(e.target.value)}
            />
          </div>
          <div className="g-1">
            <label className="label-subject">Subject*</label>
            <input
              className="form-field font"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <br></br>
          </div>
          <div className="g-1">
            <label className="label-comments">Comments*</label>
            <textarea
              className="form-field font"
              rows="8"
              cols="30"
              name="comments"
              id="comments"
              placeholder="Your message..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="g-1">
            <input
              className="form-btn font"
              type="submit"
              value="SUBMIT"
              onClick={formSubmit}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
