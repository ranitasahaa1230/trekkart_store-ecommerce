import React from "react";
import { Link } from "react-router-dom";
// import { ProductCard } from '../../component';
import "../../component/ProductCard/ProductCard";
import "./Wishlist.css";

export function Wishlist() {
  return (
    <div>
      <main className="wishlist-main">
        <h3 className="wishlist-heading">
          My Wishlist <span className="wishlist-desc">(5)</span>
        </h3>
          <h4 className="empty-list">Your Wishlist Is Empty ! ☹️</h4>
        <ul class="wishlist-products">
          {/* <ProductCard product={product}/> */}

          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.399</span>
                  <span className="txt-crossed-off">Rs.599</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="./cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>
          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.399</span>
                  <span className="txt-crossed-off">Rs.599</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="/cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>
          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bags3.3.jpeg?raw=true"
                  alt="Travel Bags"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    4.5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.1155</span>
                  <span className="txt-crossed-off">Rs.1299</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="/cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>

          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.399</span>
                  <span className="txt-crossed-off">Rs.599</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="/cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>
          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.399</span>
                  <span className="txt-crossed-off">Rs.599</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="/cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>
          <li class="section-main">
            <div class="cards">
              <div class="img-container">
                <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-img"
                />
              </div>

              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags
                  <span className="cards-rating">
                    5<i className="fa-solid fa-star star-rating"></i>
                  </span>
                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.399</span>
                  <span className="txt-crossed-off">Rs.599</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <Link to="/cart">
                    <button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon">
                        <i class="fas fa-shopping-cart"></i>{" "}
                      </span>
                      Move to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <span class="tag">New</span>
              <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
