export const addressReducer = (addressState, {type,payload}) => {
  switch (type) {
    case 'SAVE_ORDER':
      return { ...addressState, orders: [payload, ...addressState.orders] };

    case 'UPDATE_COUPON':
      return { ...addressState, coupon: payload };

    case 'SET_SELECTED_ADDRESS':
      return { ...addressState, addressId: payload };

    case 'UPDATE_ADDRESS':
      return payload?.isEdit
        ? {
            ...addressState,
            addresses: addressState.addresses.map((address) =>
              address._id === payload.address._id
                ? { ...address, ...payload.address }
                : address
            ),
          }
        : {
            ...addressState,
            addresses: [payload, ...addressState.addresses],
          };

    case 'REMOVE_ADDRESS':
      return {
        ...addressState,
        addressId:
          addressState.addressId !== payload
            ? addressState.addressId
            : "",
        addresses: addressState.addresses.filter(({ _id }) => _id !== payload),
      };

    default:
      throw new Error("Action type not found.");
  }
};