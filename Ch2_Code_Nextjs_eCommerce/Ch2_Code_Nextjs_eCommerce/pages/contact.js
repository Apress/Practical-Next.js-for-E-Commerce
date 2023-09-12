const Contact = () => (
  <div className="contact-us">
    <p>Contact Us</p>
    <p>
      If you have an enquiry about any of our products, we'd love to hear from
      you.
    </p>
    <form action="/send-data-here" method="post" className="contact-us-form">
      <p>Fields marked with a * are required</p>
      <label htmlFor="fullname">Your full name:</label>
      <div className="contact-field">
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Your full name"
          required
        />
        <span>*</span>
      </div>

      <label htmlFor="email">Your email address:</label>
      <div className="contact-field">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />
        <span>*</span>
      </div>

      <label htmlFor="enquiry">Your enquiry:</label>
      <div className="contact-field">
        <textarea
          rows="5"
          cols="60"
          name="enquiry"
          placeholder="Your enquiry..."
        ></textarea>
      </div>
      <button type="submit" className="contact-submit">
        Submit
      </button>
    </form>
  </div>
);

export default Contact;
