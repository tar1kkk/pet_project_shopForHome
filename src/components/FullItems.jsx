import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom/dist';

function FullItems(props) {
	const { id } = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
		async function fetchItems() {
			try {
				const { data } = await axios.get('https://636fc0d4bb9cf402c81ee749.mockapi.io/items/' + id);
				setItem(data);
			} catch (e) {
				alert(e);
			}
		}
		fetchItems();
	}, [])

	if (!item) {
		return 'Loading...';
	}
	return (
		<div className='container'>
			<h3>{item.price}</h3>
			<p>{item.desc}</p>
		</div>
	);
}

export default FullItems;