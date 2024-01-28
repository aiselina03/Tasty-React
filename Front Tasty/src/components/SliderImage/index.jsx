import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function SliderImage() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sliderImage">
      <Slider {...settings}>
        <div>
          <div className="photo1">
            <div className="text">
              <h1>
                Book a table for yourself at a <br />
                time convenient for you
              </h1>
              <button>Book a table</button>
            </div>
          </div>
        </div>
        <div>
          <div className="photo2">
            <div className="text">
              <h1>
                Book a table for yourself at a <br /> time convenient for you
              </h1>
              <button>Book a table</button>
            </div>
          </div>
        </div>
        <div>
          <div className="photo3">
            <div className="text">
              <h1>
                Book a table for yourself at a <br />
                time convenient for you
              </h1>
              <button>Book a table</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderImage;
