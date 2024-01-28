import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function Menu() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="menus">
        <div className="containerMenu">
          <div className="head">
            <p>OUR MENU</p>
            <h1>Discover Our Exclusive Menu</h1>
          </div>
          <div className="cards">
            {products.map((x) => (
              <div className="card" key={x._id}>
                <div className="image">
                  <img src={x.image} alt="" />
                </div>
                <div className="info">
                  <div className="infos">
                    <h3>{x.name}</h3>
                    <i
                      className={`${
                        checkIsWishlist(x)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }`}
                      onClick={() => addRemoveWishlist(x)}
                    ></i>
                    <i
                      className="fa-solid fa-cart-shopping"
                      onClick={() => addBasket(x)}
                    ></i>
                    <NavLink to={"/detail/"+x._id}>
                    <i className="fa-regular fa-eye"></i>
                    </NavLink>
              
                  </div>
                  <p>{x.desc}</p>
                </div>
                <div className="price">
                  <h2>${x.price}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
                      <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost
          </p>
          <button>Make a Reservation</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Menu;
