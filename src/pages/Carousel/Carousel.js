import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Carousel.css";

export default function Carouselbar() {
  return (
    <div className="home" id="home">
    <div className="slide">
    <Carousel fade>
      <Carousel.Item className="image">
        <img
          className="travel"
          src={require("../../assets/images/trekking.png")}
          alt="trekking"
        />
        <Carousel.Caption>
        <div className="content">
            <h3>Trekking Collections</h3>
            <span>Best Deals- Upto 70% Off</span>
            <p>
              If you are also planning to embark on a trekking trip, here are
              the essential trekking items that should be a part of your
              backpack.Top Brands. Huge Selection. No Cost EMI Available.
            </p>
            <Link to="#" className="btns">Explore Products</Link>
          </div>   
               </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image">
        <img
          className="travel"
          src={require("../../assets/images/travel.jpg")}
          alt="travel bags"
        />

        <Carousel.Caption>
        <div className="content">
            <h3>Travel Essential Bags</h3>
            <span>Lowest Price- Best Value</span>
            <p>
              Shop for Bags, Luggage & other Travel Accessories from Top Brands.
              Buy now! Best Deals. Top Brands. Huge Selection. No Cost EMI
              Available. Low Prices. Great Offers. Easy & Fast Delivery.
            </p>
            <Link to="#" className="btns">Explore Products</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image">
        <img
          className="shoes"
          src={require("../../assets/images/home-shoe-1.png")}
          alt="shoes"
        />
        <img
          src={require("../../assets/images/home-text-1.png")}
          className="text"
              alt="shoe-text"
            />
        <Carousel.Caption>
        <div className="content">
            <h3 className="type-store">Nike Travel Shoes</h3>
            <span className="discount">Min. 40% Off</span>
            <p className="desc-store">
              Want to run faster? Not ready yet? Try our Travel Shoes to help
              you step towards running faster- FOREVER FASTER. Shop from the
              latest collection of shoes available in various brands.
            </p>
            <Link to="./pages/products.html" className="btns">Explore Products</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}
