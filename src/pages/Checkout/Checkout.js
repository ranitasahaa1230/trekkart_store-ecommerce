import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../contexts";
import { CartPrice } from "../Cart/CartPrice";

export const Checkout = () => {
  const { newAddress } = useAddress();
  const navigate = useNavigate();

  const finalAddress = newAddress?.filter(
    ({ isChecked }) => isChecked === true
  );

  const handleChange = () => {
    navigate(-1);
  };

  return (
    <div className="cart-section">
      <h3 className="cart-heading">Confirm Order </h3>
      <div className="cart-grid address-form">
        {finalAddress.map(
          ({
            _id,
            name,
            address,
            mobile,
            landmark,
            country,
            state,
            zipCode,
          }) => (
            <div className="address-contain">
              <div className="flex-address user-details">
                <input
                  id={_id}
                  type="radio"
                  name="select"
                  className="user-checkbox"
                  checked
                />
                <span className="name-details">
                  <b>Name:</b> {name}
                </span>
                <span className="name-details">
                  <b>Phn No:</b> (+91){mobile}
                </span>
                <span>
                  <b>Country:</b> {country}
                </span>
              </div>

              <div className="flex-address user-details">
                <span className="name-details">
                  <b>State: </b>
                  {state}
                </span>
                <span className="name-details">
                  <b>Landmark:</b> {landmark}
                </span>
                <span>
                  <b>ZipCode: </b>
                  {zipCode}
                </span>
              </div>

              <div className="flex-address details">
                <div>
                  <b>Address: </b>
                  {address}
                </div>
              </div>

              <div className="update-btn-container" id="dummy-values">
                <button className="submit-loginbtns" onClick={handleChange}>
                  <i className="fa-solid fa-backward"></i> {""}Go Back To Prev
                  Page
                </button>
              </div>
            </div>
          )
        )}

        <CartPrice />
      </div>
    </div>
  );
};
