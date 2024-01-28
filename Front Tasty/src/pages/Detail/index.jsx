import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { WishlistContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Detail() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  let { id } = useParams();
  
  useEffect(() => {
    fetch("http://localhost:9000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="nav"></div>
        <div className="cardContainer">
          <div className="card">
            <div className="image">
              <img src={products.image} alt="" />
            </div>
            <div className="info">
              <div className="infos">
                <h3>{products.name}</h3>
                <i
                  className={`${
                    checkIsWishlist(products)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }`}
                  onClick={() => addRemoveWishlist(products)}
                ></i>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => addBasket(products)}
                ></i>
              </div>
              <p>{products.desc}</p>
            </div>
            <div className="price">
              <h2>${products.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
