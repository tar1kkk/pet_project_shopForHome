import React, { useState } from 'react';
import Item from './Item'
import Sort from './Sort';


function Items({ items }) {
	return (
		<>
			<Sort items={items} />
			<main>
				{items.map((item) => {
					return <Item item={item} key={item.id} />
				})}
			</main>
		</>
	);


}

export default Items;