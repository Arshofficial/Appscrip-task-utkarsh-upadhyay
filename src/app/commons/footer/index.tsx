import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="footer-input-group">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CALL US</h4>
          <p>+44 221 133 5930</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>USD - US Dollar</p>
        </div>

        <div className="footer-links">
          <h4>Fake Store</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-follow">
          <h4>FOLLOW US</h4>
          <div className="footer-socials">
            <span>🌐</span> <span>📷</span> <span>🐦</span> <span>📌</span>
          </div>

          <h4>metta muse ACCEPTS</h4>
          <div className="footer-payments">
            <span>🧾</span> <span>💳</span> <span>🅰️</span> <span>🍏</span>
          </div>
        </div>
      </div>

      <p className="footer-copy">© 2025 Fake Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
