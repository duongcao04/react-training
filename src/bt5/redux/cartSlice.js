import { createSlice } from '@reduxjs/toolkit';
import { notification } from '../../utils/helper';

const cart = JSON.parse(localStorage.getItem('cart'));

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: cart ?? [] },
  reducers: {
    addCart: (state, action) => {
      const newProduct = action.payload;
      const foundProductExist = state.cart.findIndex(
        (product) => product.id === newProduct.id
      );

      if (foundProductExist === -1) {
        const newProductWithQuantity = { ...newProduct, quantity: 1 };
        state.cart.push(newProductWithQuantity);
      } else {
        state.cart[foundProductExist].quantity++;
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
      notification('Add successfully');
    },

    deleteCart: (state, action) => {
      const productId = action.payload;
      const foundProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (foundProductIndex !== -1) {
        state.cart.splice(foundProductIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
      notification('Deleted!', 'success');
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;

      const foundProductExist = state.cart.findIndex(
        (product) => product.id === productId
      );

      state.cart[foundProductExist].quantity++;

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;

      const foundProductExist = state.cart.findIndex(
        (product) => product.id === productId
      );

      state.cart[foundProductExist].quantity--;

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addCart, deleteCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
