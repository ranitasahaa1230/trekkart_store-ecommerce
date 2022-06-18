import React from "react";
import { useAddress } from "../../contexts";
import "./Address.css";

export const DisplayAddress = ({
  addresses,
  isAddressOpen,
  setIsAddressOpen,
}) => {
  const {
    userDetails,
    setUserDetails,
    newAddress,
    setNewAddress,
    setSelected,
  } = useAddress();

  const { _id, name, address, mobile, landmark, country, state, zipCode } =
    addresses;

  const handleEditClick = (addressId) => {
    setIsAddressOpen((isAddressOpen) => !isAddressOpen);
    setUserDetails({
      ...userDetails,
      name,
      address,
      mobile,
      landmark,
      country,
      state,
      zipCode,
    });
    setNewAddress(newAddress.filter(({ _id }) => _id !== addressId));
  };

  const handleDeleteClick = (addressId) => {
    setNewAddress(newAddress.filter(({ _id }) => _id !== addressId));
  };

  const handleChange = (addressId) => {
    const updatedAddressess = newAddress.map((newAdd) =>
      newAdd._id === addressId
        ? { ...newAdd, isChecked: !newAdd.isChecked }
        : { ...newAdd, isChecked: false }
    );
    setNewAddress(updatedAddressess);
    setSelected((selected) => !selected);
  };
  return (
    <div className="address-container">
      <div className="flex-address user-details">
        <input
          id={_id}
          type="radio"
          name="select"
          className="user-checkbox"
          onChange={() => handleChange(_id)}
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

      <div className="update-btn">
        <button
          className="button-update update-green"
          onClick={() => handleEditClick(_id)}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="button-update update-red"
          onClick={() => handleDeleteClick(_id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};
