import React from "react";
import "./style.scss"

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="about">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <p>ABOUT TASTY</p>
            <h2>Our chef cooks the most <br />delicious food for you</h2>
            <p>
              Far far away, behind the word mountains, far from the <br />
              countries Vokalia and Consonantia, there live the blind <br />
              texts. Separated they live in Bookmarksgrove right at the <br />
              coast of the Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and <br /> supplies
              it with the necessary regelialia. It is a <br /> paradisematic
              country, in which roasted parts of <br /> sentences fly into your
              mouth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
