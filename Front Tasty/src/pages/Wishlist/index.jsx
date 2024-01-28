import React, { useContext } from 'react'
import "./style.scss"
import { WishlistContext } from '../../context/wishlistContext'
import { BasketContext } from '../../context/basketContext';
import { Helmet } from 'react-helmet-async';

function Wishlist() {
  const {    wishlist,addRemoveWishlist,checkIsWishlist} = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext);
  return (
    <>
     <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className="wishlist">
      <div className="nav">
        
      </div>
      <div className="container">
      <div className="cards">
            {wishlist.map((x) => (
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
                  </div>
                  <p>{x.desc}</p>
                </div>
                <div className="price">
                  <h2>${x.price}</h2>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist