export const getAddress = (addresses, selectedAddressId) => {
    return addresses.find(({ _id }) => _id === selectedAddressId);
  };