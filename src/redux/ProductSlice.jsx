import {  createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    data: [], 
  },
  reducers: {
    getProduct: (state, action) => {
        state.data = action.payload
      },
    updateStatus : (state , action) => {
        const {args , id} = action.payload
         state.data.map((item) => {
        return item.id === id ? item.status = args : item.status
      })
       
    }
  },
});

// this is for dispatch
export const { getProduct , updateStatus } = ProductSlice.actions;
export const selectProductData = (state) => state.product.data;

// this is for configureStore
export default ProductSlice.reducer;