import React, { useState } from 'react';


function Item({ title, desc, price, img }) {
	return (
		<div className='item'>
			<img src={'./img/' + img} />
			<h2>{title}</h2>
			<p>{desc}</p>
			<b>{price}$</b>
			<div className='add-to-cart'>+</div>
		</div>
	);
}


export default Item;