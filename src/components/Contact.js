import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect!</h2>

      {/* Contact Introduction */}
      <p className="contact-intro">
        I'm always excited to collaborate, discuss new ideas, or help out with any inquiries.
        Don't hesitate to reach out—whether it's about a project, a question, or just to say hi!
      </p>

      {/* Contact Details */}
      <div className="contact-details">
        <p className="contact-text">
          You can reach me easily through the following:
        </p>

        <div className="contact-info">
          <span className="contact-icon" role="img" aria-label="email">
            📧
          </span>
          <a href="mailto:akshay.h.naik@gmail.com" className="contact-link">
            akshay.h.naik@gmail.com
          </a>
        </div>

        <div className="contact-info">
          <span className="contact-icon" role="img" aria-label="phone">
            📞
          </span>
          <a href="tel:+16478988160" className="contact-link">
            +1 (647) 898-8160
          </a>
        </div>
      </div>

      {/* Closing Line */}
      <p className="closing-line">
        Looking forward to hearing from you and creating something amazing together!
      </p>
    </section>
  );
}

export default Contact;
