import React from "react";
import { useAddress } from "../../contexts";
import { v4 as uuid } from "uuid";
import "./Address.css";

export const AddressForm = ({ setIsAddressOpen }) => {
  const { userDetails, setUserDetails, newAddress, setNewAddress } =
    useAddress();
  const { name, mobile, country, state, landmark, zipCode, address } =
    userDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewAddress([
      ...newAddress,
      {
        _id: uuid(),
        name,
        mobile,
        country,
        state,
        landmark,
        zipCode,
        address,
        isChecked: false,
      },
    ]);

    setUserDetails({
      ...userDetails,
      name: "",
      mobile: "",
      country: "",
      state: "",
      landmark: "",
      zipCode: "",
      address: "",
    });
    setIsAddressOpen((isAddress) => !isAddress);
  };

  const handleDummyAddress = () => {
    setUserDetails({
      ...userDetails,
      name: "Ranita Saha",
      mobile: "8992578920",
      country: "India",
      state: "West Bengal",
      landmark: "Jadavpur University",
      zipCode: "700051",
      address: "4/9A, C.R. Colony, Baghajatin",
      isChecked: false,
    });
  };

  return (
    <div className="form-container">
      <form className="input-group" onSubmit={handleSubmit}>
        <div className="flex-address">
          <label htmlFor="name" className="password-labels">
            Name:{" "}
            <input
              className="input-field"
              required
              value={name}
              placeholder="Enter your name"
              onChange={(e) =>
                setUserDetails((userDetails) => ({
                  ...userDetails,
                  name: e.target.value,
                }))
              }
            />
          </label>

          <label htmlFor="mobile" className="password-labels">
            Phn No:{" "}
            <input
              className="input-field"
              type="number"
              required
              value={mobile}
              placeholder="Enter 10 digit phone number"
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value })
              }
            />
          </label>

          <label htmlFor="country" className="password-labels">
            Country:{" "}
            <input
              className="input-field"
              value={country}
              placeholder="Enter your nearest country"
              onChange={(e) =>
                setUserDetails({ ...userDetails, country: e.target.value })
              }
            />
          </label>
          <label htmlFor="state" className="password-labels">
            State:{" "}
            <input
              className="input-field"
              value={state}
              placeholder="Enter your state"
              onChange={(e) =>
                setUserDetails({ ...userDetails, state: e.target.value })
              }
            />
          </label>

          <label htmlFor="landmark" className="password-labels">
            Landmark:{" "}
            <input
              className="input-field"
              value={landmark}
              placeholder="Enter your nearest landmark"
              onChange={(e) =>
                setUserDetails({ ...userDetails, landmark: e.target.value })
              }
            />
          </label>

          <label htmlFor="zipCode" className="password-labels">
            PinCode:{" "}
            <input
              className="input-field"
              value={zipCode}
              placeholder="Enter your pincode"
              onChange={(e) =>
                setUserDetails({ ...userDetails, zipCode: e.target.value })
              }
            />
          </label>
        </div>

        <label htmlFor="address" className="password-labels">
          Address:{" "}
        </label>
        <textarea
          id="textarea"
          className="input-fields"
          required
          value={address}
          placeholder="Enter your address"
          onChange={(e) =>
            setUserDetails({ ...userDetails, address: e.target.value })
          }
        />

        <div id="dummy-values">
          <button className="submit-loginbtn" onClick={handleDummyAddress}>
            Add Dummy Address
          </button>
          <button className="submit-loginbtns">Add Address</button>
        </div>
      </form>
    </div>
  );
};
