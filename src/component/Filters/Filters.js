import React from "react";
import "./Filters.css";

export function Filters() {
  return (
    <div>
      <aside className="aside-product">
        <div className="flex-filters flex-categories btm-b">
          <h2>Filters</h2>
          <span className="filters-desc">Clear All</span>
        </div>
        <ul className="flex-categories btm-b">
          <h3 className="filter-desc-categories">Sort By</h3>
          <li className="filter-sorts">
            <label htmlFor="low-to-high" className="filter-categories">
              <input
                type="radio"
                name="price"
                id="low-to-high"
                className="filter-categories"
                value="low to high"
              />
              Price - Low to High
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="high-to-low" className="filter-categories">
              <input
                type="radio"
                name="price"
                id="high-to-low"
                className="filter-categories"
                value="high to low"
              />
              Price - High to Low
            </label>
          </li>
        </ul>

        <ul className="flex-categories btm-b">
          <h3 className="filter-desc-categories">Category</h3>
          <li className="filter-sorts">
            <label htmlFor="jackets" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="jackets"
                className="filter-categories"
                value="jackets"
              />
              Jackets
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="suitcase" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="suitcase"
                className="filter-categories"
                value="suitcase"
              />
              Suitcases
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="backpacks" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="backpacks"
                className="filter-categories"
                value="backpacks"
              />
              Backpacks
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="trekking-gears" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="trekking-gears"
                className="filter-categories"
                value="trekking-gears"
              />
              Trekking Gears
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="shoes" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="shoes"
                className="filter-categories"
                value="shoes"
              />
              Travelling Shoes
            </label>
          </li>
        </ul>

        <ul className="flex-categories">
          <h3 className="filter-desc-categories">Brands</h3>
          <li className="filter-sorts">
            <label htmlFor="arnisa" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="arnisa"
                className="filter-categories"
                value="arnisa"
              />
              Arnisa
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="bianyo" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="bianyo"
                className="filter-categories"
                value="bianyo"
              />
              Bianyo
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="celine" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="celine"
                className="filter-categories"
                value="celine"
              />
              Celine
            </label>
          </li>
          <li className="filter-sorts">
            <label htmlFor="gucci" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="gucci"
                className="filter-categories"
                value="gucci"
              />
              Gucci
            </label>
          </li>
        </ul>
      </aside>
    </div>
  );
}
