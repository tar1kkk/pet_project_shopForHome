import React from 'react';
import { useState } from 'react';

function Sort({ }) {
	const [selectedSort, setSelectedSort] = useState('');
	const options = [
		{ value: 'алфавиту', sortProperty: 'title' },
		{ value: 'цене', sortProperty: 'price' },
	]
	return (
		<select >
			<option value="">Тип сортировки</option>
			{options.map((obj) => <option onClick={() => console.log(obj.sortProperty)} value={obj.sortProperty}>{obj.value}</option>)
			}
		</select >

	);
}

export default Sort;