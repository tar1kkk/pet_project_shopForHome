import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from './slices/FilterSlice';
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
	reducer: {
		FilterSlice,
		CartSlice
	}
});