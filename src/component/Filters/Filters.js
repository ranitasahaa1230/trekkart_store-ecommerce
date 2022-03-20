import React from "react";
import "./Filters.css";

export function Filters() {
  return (
    <div>
      <aside class="aside-product">
        <div class="flex-filters flex-categories btm-b">
          <h2>Filters</h2>
          <span class="filters-desc">Clear All</span>
        </div>
        <ul class="flex-categories btm-b">
          <h3 class="filter-desc-categories">Sort By</h3>
          <li class="filter-sorts">
            <label for="low-to-high" class="filter-categories">
              <input
                type="radio"
                name="price"
                id="low-to-high"
                class="filter-categories"
                value="low to high"
              />
              Price - Low to High
            </label>
          </li>
          <li class="filter-sorts">
            <label for="high-to-low" class="filter-categories">
              <input
                type="radio"
                name="price"
                id="high-to-low"
                class="filter-categories"
                value="high to low"
              />
              Price - High to Low
            </label>
          </li>
        </ul>

        <ul class="flex-categories btm-b">
          <h3 class="filter-desc-categories">Category</h3>
          <li class="filter-sorts">
            <label for="jackets" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="jackets"
                class="filter-categories"
                value="jackets"
              />
              Jackets
            </label>
          </li>
          <li class="filter-sorts">
            <label for="suitcase" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="suitcase"
                class="filter-categories"
                value="suitcase"
              />
              Suitcases
            </label>
          </li>
          <li class="filter-sorts">
            <label for="backpacks" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="backpacks"
                class="filter-categories"
                value="backpacks"
              />
              Backpacks
            </label>
          </li>
          <li class="filter-sorts">
            <label for="trekking-gears" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="trekking-gears"
                class="filter-categories"
                value="trekking-gears"
              />
              Trekking Gears
            </label>
          </li>
          <li class="filter-sorts">
            <label for="shoes" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="shoes"
                class="filter-categories"
                value="shoes"
              />
              Travelling Shoes
            </label>
          </li>
        </ul>

        <ul class="flex-categories">
          <h3 class="filter-desc-categories">Brands</h3>
          <li class="filter-sorts">
            <label for="arnisa" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="arnisa"
                class="filter-categories"
                value="arnisa"
              />
              Arnisa
            </label>
          </li>
          <li class="filter-sorts">
            <label for="bianyo" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="bianyo"
                class="filter-categories"
                value="bianyo"
              />
              Bianyo
            </label>
          </li>
          <li class="filter-sorts">
            <label for="celine" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="celine"
                class="filter-categories"
                value="celine"
              />
              Celine
            </label>
          </li>
          <li class="filter-sorts">
            <label for="gucci" class="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="gucci"
                class="filter-categories"
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
