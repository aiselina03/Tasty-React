import React from "react";
import "./style.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="foot1">
        <div className="tasty">
          <h3>Tasty</h3>
          <p>
            Far far away, behind the word <br /> mountains, far from the
            countries <br /> Vokalia and Consonantia, there <br />
            live the blind texts.
          </p>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="hours">
          <h3>Opening Hours</h3>
          <ul>
            <li> Monday: 08: - 22:00</li>
            <li> Tuesday: 08: - 22:00</li>
            <li> Wednesday: 08: - 22:00</li>
            <li> Thursday: 08: - 22:00</li>
            <li> Friday: 08: - 22:00</li>
            <li> Saturday: 08: - 22:00</li>
            <li> Sunday: 08: - 22:00</li>
          </ul>
        </div>
        <div className="contact">
        <h3>Contact Information</h3>
        <p>198 West 21th Street, Suite 721 <br /> New York NY 10016</p>
        <p>+ 1235 2355 98</p>
        <p></p>
        </div>
        <div className="letter">
          <h3>Newsletter</h3>
          <p>Far far away, behind the word <br /> mountains, far from the countries.</p>
        </div>
      </div>
      <div className="foot2">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </div>
  );
}

export default Footer;
