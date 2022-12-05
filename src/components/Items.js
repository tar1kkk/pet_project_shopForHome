import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import MyLoader from './MyLoader';


function Items({ items, loading, sortBy }) {
	const { valueSearch } = useSelector(state => state.FilterSlice);
	const SearchItem = items
		.filter(obj => {
			if (obj.title.toLowerCase().includes(valueSearch.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		})

	return (
		<>
			<main>
				{loading ? [...new Array(6)].map((_, id) => {
					return <MyLoader key={id} />
				}) : SearchItem.map((item) => {
					return <Item  {...item} />
				})}
			</main>
		</>
	);


}

export default Items;