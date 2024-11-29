import React from "react";
import "../app/globals.css"; // Correct relative path from Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Rubi Abid</span>
        <p className="footer-copyright">2024 © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

