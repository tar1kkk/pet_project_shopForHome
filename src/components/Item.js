import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/CartSlice';


function Item({ title, desc, price, img, id }) {
	const dispatch = useDispatch();
	function addToCart() {
		const obj = {
			id,
			img,
			title,
			price,
			desc
		}
		dispatch(addItem(obj));
	}
	return (
		<div className='item'>
			<img src={'./img/' + img} />
			<h2>{title}</h2>
			<p>{desc}</p>
			<b>{price}$</b>
			<div onClick={addToCart} className='add-to-cart'>+</div>
		</div>
	);
}


export default Item;