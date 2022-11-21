import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	totalPrice: 0,
	items: [],
}


const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0)
		},
	}
})


export const { addItem } = CartSlice.actions;

export default CartSlice.reducer;

