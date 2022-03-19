import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

export default function Carouselbar() {
  return (
    <section class="home" id="home">
    <div class="slide">
    <Carousel fade>
      <Carousel.Item className="image">
        <img
          className="travel"
          src={require("../../assets/images/trekking.png")}
          alt="trekking"
        />
        <Carousel.Caption>
        <div class="content">
            <h3>Trekking Collections</h3>
            <span>Best Deals- Upto 70% Off</span>
            <p>
              If you are also planning to embark on a trekking trip, here are
              the essential trekking items that should be a part of your
              backpack.Top Brands. Huge Selection. No Cost EMI Available.
            </p>
            <a href="#" class="btns">Explore Products</a>
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
        <div class="content">
            <h3>Travel Essential Bags</h3>
            <span>Lowest Price- Best Value</span>
            <p>
              Shop for Bags, Luggage & other Travel Accessories from Top Brands.
              Buy now! Best Deals. Top Brands. Huge Selection. No Cost EMI
              Available. Low Prices. Great Offers. Easy & Fast Delivery.
            </p>
            <a href="#" class="btns">Explore Products</a>
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
        <div class="content">
            <h3 class="type-store">Nike Travel Shoes</h3>
            <span class="discount">Min. 40% Off</span>
            <p class="desc-store">
              Want to run faster? Not ready yet? Try our Travel Shoes to help
              you step towards running faster- FOREVER FASTER. Shop from the
              latest collection of shoes available in various brands.
            </p>
            <a href="./pages/products.html" class="btns">Explore Products</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </section>
  );
}
