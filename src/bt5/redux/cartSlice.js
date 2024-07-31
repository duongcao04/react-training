import { createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart'));

export const cartSlice = createSlice({
  name: 'counter',
  initialState: { cart: cart ?? [] },
  reducers: {
    addCart: (state, action) => {
      const newProduct = action.payload
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
    },

    deleteCart: (state, action) => {
      const productId = action.payload;
      const foundProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      state.cart.splice(foundProductIndex, 1);
      
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
