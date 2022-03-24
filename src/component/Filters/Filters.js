import React from "react";
import "./Filters.css";
import {useData} from "../../contexts"
// import { useCategory } from "../../contexts/data/categoryContext";

export function Filters() {
  const {state:{sortBy,includeJackets,includeBags,includeShoes,includeSuitcase, byRating},dispatch}=useData()
  // const {categories}=useCategory();
  // const categoryNames = categories.map(category => category.categoryName);
  // console.log(categoryNames)

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
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={()=>dispatch({type:"LOW_TO_HIGH"})}
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
                onChange={()=>dispatch({type:"HIGH_TO_LOW"})}
              />
              Price - High to Low
            </label>
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
                onChange={() => dispatch({ type: "ADD_CATEGORY", payload: category })}
              />
              {category}
            </label>
          </li>
          )})}  */}

          <li className="filter-sorts">
            <label htmlFor="jackets" className="filter-categories">
              <input
                type="checkbox"
                name="category"
                id="jackets"
                className="filter-categories"
                value="jackets"
                checked={includeJackets} 
                onChange={ ()=> dispatch({type:"INCLUDE_JACKETS"})}
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
                onChange={ ()=> dispatch({type:"INCLUDE_BAGS"})}
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
                onChange={ ()=> dispatch({type:"INCLUDE_SHOES"})}
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
               onChange={ ()=> dispatch({type:"INCLUDE_SUITCASE"})}
              />
              Suitcases
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

        <ul className="flex-categories">
          <h3 className="filter-desc-categories">Ratings</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating}>
            <label htmlFor="ratings" className="filter-categories">
                <input
                  type="radio"
                  name="rating"
                  className="filter-categories"
                  checked={byRating === rating}
                  onChange={() => dispatch({ type: "RATING", payload: rating })}
                />
                {rating} stars and above
              </label>
            </div>
          ))}
        </ul>
      </aside>
    </div>
  );
}
