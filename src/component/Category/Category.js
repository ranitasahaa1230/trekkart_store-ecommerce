import React from "react";
import { landingPageImages } from "../../assets/LandingPage";
import {Loader} from "../Loader/Loader";
import { Link } from "react-router-dom";
import "./Category.css";
import { useCategory } from "../../contexts/data/categoryContext";

export function Category() {
  const {
    brands: { bianyo, arnisa, celine, gucci },
  } = landingPageImages;
  const {
    review: { john, lara, mohit },
  } = landingPageImages;

  const { categories, loader, error} = useCategory();


  return (
    <div>
      <section className="service">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Delivery</h3>
            <p>
              Get your products delivered in superfast mode. Under 90 Mins at
              unbelievable prices from the best sellers
            </p>
          </div>

          <div className="box">
            <i className="fas fa-undo"></i>
            <h3>10 days replacements</h3>
            <p>
              Replacement is now easy with us. 10 days. Refund, Replacement or
              Exchange.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-headset"></i>
            <h3>24 x 7 support</h3>
            <p>
              Available throughout the day, 6 days a week.This simply means that
              the technical service is available around the clock.
            </p>
          </div>
        </div>
      </section>

      <section className="latest-products" id="products">
      {loader && <Loader/>}
    {error && <div>{error}</div>}
        <h2 className="heading">Latest Collections</h2>
        <div className="products-containerbox">
            {
              categories.map(({_id,categoryName,description,image})=>(
                <div className="product-box" key={_id}>
                <img src={image} alt="product" />
            <div className="content-product">
              <h3 className="desc-products">
                {description}
              </h3>
              <Link to="/products" className="btns">
                Explore More
              </Link>
            </div>
                </div>
              ))
            }
            </div>
      </section>

      <section className="latest-brands" id="brands">
        <h2 className="heading">Featured Brands</h2>
        <div className="brands-container">
          <div className="brands-box">
            <img src={bianyo} alt="brands" />
          </div>

          <div className="brands-box">
            <img src={arnisa} alt="brands" />
          </div>

          <div className="brands-box">
            <img src={celine} alt="brands" />
          </div>

          <div className="brands-box">
            <img src={gucci} alt="brands" />
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h2 className="heading">Customer's Review</h2>

        <div className="box-container">
          <div className="box">
            <img src={john} alt="review" />
            <h3>John Deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>

          <div className="box">
            <img src={lara} alt="review" />
            <h3>Lara Agarwal</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="box">
            <img src={mohit} alt="review" />
            <h3>Mohit Chaurasia</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="content">
          <h2 className="heading">Monthly Newsletter</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            ullam veniam at itaque culpa hic corporis saepe dicta doloremque
            nihil.
          </p>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              className="inputbox"
            />
            <button type="submit" className="send-btns">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}
