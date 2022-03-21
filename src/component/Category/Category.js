import React from "react";
import { landingPageImages } from "../../assets/LandingPage/index";
import { Link } from "react-router-dom";
import "./Category.css";

export function Category() {
  const {
    collections: { jackets, travelbags, hikingbags, boots },
  } = landingPageImages;
  const {
    brands: { bianyo, arnisa, celine, gucci },
  } = landingPageImages;
  const {
    review: { john, lara, mohit },
  } = landingPageImages;

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
        <h2 className="heading">Latest Collections</h2>

        <div className="products-containerbox">
          <div className="product-box">
            <img src={jackets} alt="product" />
            <div className="content-product">
              <h3 className="desc-products">
                Get your Jackets now at Best Price. For Limited Period Only.
              </h3>
              <Link to="./pages/products.html" className="btns">
                Explore More
              </Link>
            </div>
          </div>

          <div className="product-box">
            <img src={travelbags} alt="product" />
            <div className="content-product">
              <h3 className="desc-products">
                Get your Travel Bags now at Best Price. Offer only for Today!
              </h3>
              <Link to="./pages/products.html" className="btns">
                Explore More
              </Link>
            </div>
          </div>

          <div className="product-box">
            <img src={hikingbags} alt="product" />
            <div className="content-product">
              <h3 className="desc-products">
                Get your Hiking Bags now at Best Price. Grab it now.
              </h3>
              <Link to="./pages/products.html" className="btns">
                Explore More
              </Link>
            </div>
          </div>

          <div className="product-box">
            <img src={boots} alt="product" />
            <div className="content-product">
              <h3 className="desc-products">
                Get your Hiking Boots now at Best Price. For Limited Period
                Only.
              </h3>
              <Link to="./pages/products.html" className="btns">
                Explore More
              </Link>
            </div>
          </div>
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
