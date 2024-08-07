export const initialState = {
  basket: [],
  user: null,
  address: "",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove (id: ${action.id}) as its not in the cart`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_CART":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    default:
      return state;
  }
};

export default reducer;
