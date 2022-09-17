import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>ons maatwerk</h4>
            <ul>
              <li>
                <a href="#">applicaties</a>
              </li>
              <li>
                <a href="#">CRM-systemen</a>
              </li>
              <li>
                <a href="#">koppelingen</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>over ons</h4>
            <ul>
              <li>
                <a href="#">diensten</a>
              </li>
              <li>
                <a href="#">oplossingen</a>
              </li>
              <li>
                <a href="#">ons werk</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>volg ons</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>contact</h4>
            <div className="contact">
              MG Software <br />
              Keneaupark 15 <br />
              2011 MR Haarlem <br />
              +316 51 37 92 30
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };