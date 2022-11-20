import React, { useState } from 'react';
import Item from './Item';
import MyLoader from './MyLoader';


function Items({ items, loading, sortBy }) {
	return (
		<>
			<main>
				{loading ? [...new Array(6)].map((_, id) => {
					return <MyLoader key={id} />
				}) : items.map((item) => {
					return <Item  {...item} />
				})}
			</main>
		</>
	);


}

export default Items;