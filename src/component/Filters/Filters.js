import React from "react";
import "./Filters.css";
import { useData } from "../../contexts";
import { actionTypes } from "../../reducers/constants/productConstant";
// import { useCategory } from "../../contexts/data/categoryContext";

export function Filters() {
  const {
    state: {
      sortBy,
      includeJackets,
      includeBags,
      includeShoes,
      includeSuitcase,
      priceRange,
      byRating,
      brandArnisa,
      brandGucci,
      brandCeline,
      brandBianyo,
    },
    dispatch,
  } = useData();
  // const {categories}=useCategory();
  // const categoryNames = categories.map(category => category.categoryName);
  // console.log(categoryNames)
  const {
    INCLUDE_BAGS,
    INCLUDE_JACKETS,
    INCLUDE_SHOES,
    INCLUDE_SUITCASE,
    RESET,
  } = actionTypes;

  return (
    <div>
      <aside className="aside-product" id='products-categories'>
        <div className="flex-filters flex-categories btm-b flex-height">
          <h2>Filters</h2>
          <span
            className="filters-desc"
            onClick={() => dispatch({ type: RESET })}
          >
            Clear All
          </span>
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
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
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
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              Price - High to Low
            </label>
          </li>
        </ul>

        <ul className="flex-categories btm-b filter-ranges">
          <h3 className="filter-desc-categories">Select Price Range</h3>
          <li className="filter-range">
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
              <option value="1000" label="1000"></option>
              <option value="2000" label="2000"></option>
              <option value="3000" label="3000"></option>
              <option value="4000" label="4000"></option>
              <option value="5000" label="5000"></option>
            </datalist>
            <input
              list="tickmarks"
              type="range"
              name="rangeInput"
              className="slider"
              min="0"
              step="1000"
              max="5000"
              value={priceRange}
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
            />
          </li>
        </ul>

        <ul className="flex-categories btm-b">
          <h3 className="filter-desc-categories">Category</h3>
          {/* {categoryNames.map(category=>{
            return(  
            <li className="filter-sorts" key={category}>
            <label htmlFor={category} className="filter-categories">
            <input
                type="checkbox"
                name="category"
                id="category"
                className="filter-categories"
                value={category}
                checked={category.includes(category)}
                onChange={() => dispatch({ type: "FILTER_BY_CATEGORY", payload: category })}
              />
              {category}
            </label>
          </li>
          )})}  */}
          {/* checked={state.catagoryName.includeBags}
           onChange={() => dispatch({type: "CATEGORY_NAME", payload: "includeBags" })} */}

          <li className="filter-sorts">
            <label htmlFor="jackets" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="jackets"
                className="filter-categories"
                value="jackets"
                checked={includeJackets}
                onChange={() => dispatch({ type: INCLUDE_JACKETS })}
              />
              Jackets
            </label>
          </li>

          <li className="filter-sorts">
            <label htmlFor="bags" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="bags"
                className="filter-categories"
                value="bags"
                checked={includeBags}
                onChange={() => dispatch({ type: INCLUDE_BAGS })}
              />
              Backpacks
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
                checked={includeShoes}
                onChange={() => dispatch({ type: INCLUDE_SHOES })}
              />
              Travelling Shoes
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
                checked={includeSuitcase}
                onChange={() => dispatch({ type: INCLUDE_SUITCASE })}
              />
              Travel Bags
            </label>
          </li>
        </ul>

        <ul className="flex-categories btm-b">
          <h3 className="filter-desc-categories">Brands</h3>
          <li className="filter-sorts">
            <label htmlFor="arnisa" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="arnisa"
                className="filter-categories"
                value="arnisa"
                checked={brandArnisa}
                onChange={() => dispatch({ type: "BRAND_ARNISA" })}
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
                checked={brandBianyo}
                onChange={() => dispatch({ type: "BRAND_BIANYO" })}
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
                checked={brandCeline}
                onChange={() => dispatch({ type: "BRAND_CELINE" })}
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
                checked={brandGucci}
                onChange={() => dispatch({ type: "BRAND_GUCCI" })}
              />
              Gucci
            </label>
          </li>
        </ul>

        <ul className="flex-categories">
          <h3 className="filter-desc-categories">Ratings</h3>
          {[4, 3, 2, 1].map((rating) => (
            <label className="filter-categories" key={rating}>
              <input
                type="radio"
                name="rating"
                id="ratingbar"
                value="rating-bar"
                className="filter-categories"
                checked={byRating === rating}
                onChange={() => dispatch({ type: "RATING", payload: rating })}
              />
              {rating} stars and above
            </label>
          ))}
        </ul>
      </aside>
    </div>
  );
}
