import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAddress } from '../../contexts';

export const Checkout = () => {
  const { newAddress, selected } = useAddress();
  const navigate = useNavigate();

  const finalAddress = newAddress?.filter(
    ({ isChecked }) => isChecked === true
  );

  const handleChange = () => {
    navigate("/address");
  };

  return (
    <div className="cart-section">
          <h3 className="cart-heading">Confirm Order </h3>

    </div>
  )
}
