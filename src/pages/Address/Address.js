import React, {useState} from "react";
import { useToast } from "../../hooks";
import { useNavigate } from "react-router-dom";
import "./Address.css";
import { useAddress } from "../../contexts";
import { AddressForm } from "./AddressForm";
import { DisplayAddress } from "./DisplayAddress";

export const Address = () => {
  const { newAddress, selected } = useAddress();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const handleNewAddressClick = () => {
    setIsAddressOpen((isAddress) => !isAddress);
  };

  const handleCheckoutClick = () => {
    if (newAddress.length > 0 && selected) {
      navigate("/checkout");
    } else {
      showToast("error", "Please select an address for delivery");
    }
  };

  return (
    <div className="cart-section">
      <h3 className="cart-heading">Manage Address </h3>
      <div className="cart-address" id="btn">
        <button
          className="submit-loginbtn"
          id="btns"
          onClick={handleNewAddressClick}
        >
          Add New Address{" "}
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </button>
        <button
          className="submit-loginbtns"
          id="btns"
          onClick={handleCheckoutClick}
        >
          Proceed To Checkout
        </button>
      </div>

      {isAddressOpen && (
          <AddressForm isAddressOpen={isAddressOpen} setIsAddressOpen={setIsAddressOpen} />
        )}

        {newAddress &&
          newAddress.length > 0 &&
          newAddress.map((addresses) => (
            <DisplayAddress
              addresses={addresses}
              key={newAddress._id}
              isAddressOpen={isAddressOpen}
              setIsAddressOpen={setIsAddressOpen}
            />
          ))}

    </div>
  );
};
