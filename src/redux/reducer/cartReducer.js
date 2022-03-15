const INITIAL_STATE = {
  cart: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (indexItemAdd !== -1) {
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        return {
          cart: newArr,
        };
      }

    case "UPDATEITEM":
      return {};
  }
}
