import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        .footer {
          background-color: #f7f7f7;
          padding: 40px 20px 20px;
          border-top: 1px solid #ccc;
          font-family: sans-serif;
          margin: 0;
        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 30px;
        }
        .footer-col {
          min-width: 200px;
          flex: 1;
        }
        .footer-col h4 {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col ul li {
          margin-bottom: 8px;
        }
        .footer-col ul li a {
          font-size: 13px;
          text-decoration: none;
          color: #333;
          transition: color 0.3s;
        }
        .footer-col ul li a:hover {
          color: #000;
        }
        .subscribe-section input {
          padding: 8px;
          border: none;
          border-bottom: 1px solid #000;
          outline: none;
          width: 100%;
          max-width: 250px;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .subscribe-section button {
          padding: 8px 16px;
          background-color: #000;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
          max-width: 250px;
          font-size: 14px;
        }
        .subscribe-section button:hover {
          background-color: #333;
        }
        .subscribe-section a {
          display: block;
          font-size: 12px;
          margin-top: 10px;
          color: #000;
          text-decoration: underline;
          cursor: pointer;
        }
        .social-icons {
          margin-top: 20px;
          display: flex;       /* <-- make icons inline */
          gap: 12px;           /* spacing between icons */
          align-items: center; /* vertical center */
        }
        .social-icons svg {
          width: 24px;
          height: 24px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .social-icons svg:hover {
          transform: scale(1.2);
        }
        .footer-bottom {
          text-align: center;
          font-size: 12px;
          color: #333;
          padding-top: 30px;
          border-top: 1px solid #ccc;
        }
        .footer-bottom a {
          color: #000;
          margin: 0 5px;
          text-decoration: none;
          cursor: pointer;
        }
        .footer-bottom a:hover {
          text-decoration: underline;
        }
        .success-message {
          font-size: 12px;
          color: green;
          margin-top: 5px;
        }
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 20px;
          }
          .footer-col {
            flex: none;
          }
          .subscribe-section input,
          .subscribe-section button {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* Subscribe Section */}
          <div className="footer-col subscribe-section">
            <h4>See It First</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
            <span className="success-message">{message}</span>
            <a href="#">Privacy Policy</a>

            <div className="social-icons">
              <AiOutlineInstagram
                onClick={() => window.open("https://instagram.com", "_blank")}
              />
              <AiOutlineYoutube
                onClick={() => window.open("https://youtube.com", "_blank")}
              />
              <AiOutlineFacebook
                onClick={() => window.open("https://facebook.com", "_blank")}
              />
            </div>
          </div>

          {/* Customer Support */}
          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Store Locator</a>
              </li>
              <li>
                <a href="#">NoiréCash</a>
              </li>
              <li>
                <a href="#">GiftCards</a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="footer-col">
            <h4>Help & Support</h4>
            <ul>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">How To Order</a>
              </li>
              <li>
                <a href="#">How To Track</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Our Values</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {currentYear} Noiré, Inc. |
          <a href="#">Privacy Policy</a> |
          <a href="#">Your Privacy Choices</a> |
          <a href="#">Terms of Use</a> |
          <a href="#">Careers</a> |
          <a href="#">Sustainability</a> |
          <a href="#">About Noiré Inc.</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
