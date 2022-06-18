import axios from "axios";

export const getAllAddress = () => {
  return axios.get("/api/user/address", {
    headers: { authorization: localStorage.getItem("token") },
});
};

export const addAddress = (address) => {
  return axios.post(
    "/api/user/address/",
    { address },
    {headers: { authorization: localStorage.getItem("token") },
  });
};

export const updateAddress = async (address) => {
  return await axios.post(
    `/api/user/address/${address._id}`,
    {
      address,
    },
    {
        headers: { authorization: localStorage.getItem("token") },
    }
  );
};

export const removeAddress = async (address) => {
  return await axios.delete(
    `/api/user/address/${address._id}`,

    {
        headers: { authorization: localStorage.getItem("token") },
    }
  );
};
