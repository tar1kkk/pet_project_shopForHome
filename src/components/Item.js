import React, { useState } from 'react';


function Item({ item }) {
	return (
			<div className='item'>
				<img src={'./img/' + item.img} />
				<h2>{item.title}</h2>
				<p>{item.desc}</p>
				<b>{item.price}$</b>
				<div className='add-to-cart'>+</div>
			</div>
	);
}


export default Item;