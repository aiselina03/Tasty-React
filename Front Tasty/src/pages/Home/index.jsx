import React from "react";
import Menu from "../../components/Menu";
import SliderImage from "../../components/SliderImage";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Guests from "../../components/Guests";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
     <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <SliderImage />
        <About />
        <Menu />
        <Guests/>
        <Blog />
      </div>
    </>
  );
}

export default Home;
