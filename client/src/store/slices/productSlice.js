import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  isLoaded: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.isLoaded = true
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = productSlice.actions;

export default productSlice.reducer;
