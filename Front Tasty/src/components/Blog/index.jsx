import React from "react";
import "./style.scss";

function Blog() {
  return (
    <>
      <div className="blog">
        <div className="containerBlog">
          <div className="header">
            <p>BLOG</p>
            <h1>Recent Blog</h1>
          </div>
          <div className="cards">
            <div className="card">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg"
                alt=""
              />
              <div className="text">
                <p>July 7, 2018 Admin</p>
                <h2>
                  Even the all-powerful Pointing has no control about the blind
                  texts
                </h2>
                <a href="">Read more</a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_8.jpg"
                alt=""
              />
              <div className="text">
                <p>July 7, 2018 Admin</p>
                <h2>
                  Even the all-powerful Pointing has no control about the blind
                  texts
                </h2>
                <a href="">Read more</a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg"
                alt=""
              />
              <div className="text">
                <p>July 7, 2018 Admin</p>
                <h2>
                  Even the all-powerful Pointing has no control about the blind
                  texts
                </h2>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
