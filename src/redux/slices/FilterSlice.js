import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	currentPage: 1,
	valueSearch: '',
	sort: {
		name: 'Default',
	},
};


const FlterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		changePages(state, action) {
			state.currentPage = action.payload;
		},
		changeSearch(state, action) {
			state.valueSearch = action.payload;
		}
	}
});

export const { setCategoryId, setSort, setCurrentPage, changePages, changeSearch } = FlterSlice.actions;

export default FlterSlice.reducer;