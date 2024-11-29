"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  return (
    <section id="contact" className="email-section">
      <div className="background-gradient"></div>
      <div className="email-content">
        <h5 className="section-heading section-container">Let&apos;s Connect</h5>
        <p className="section-description">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="social-links">
          <Link href="https://github.com/RubiAbid" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rubi-abid-8488a7232" target="_blank">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn Icon"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="success-message">
            Email sent successfully!
          </p>
        ) : (
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="form-input"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="form-input"
                placeholder="Just saying hi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="form-input"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;