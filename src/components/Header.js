import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Categories from './Categories';
import Sort from './Sort';

function Header() {
	const [cartOpen, setCartOpen] = useState(false);
	const { items, totalPrice } = useSelector(state => state.CartSlice);
	console.log(items)
	return (
		<header>
			<div>
				<span className='logo'>House Staff</span>
				<ul className='nav'>
					<li>Про нас</li>
					<li>Контакты</li>
					<li>Кабинет</li>
				</ul>
				<FaShoppingBasket onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
				{cartOpen && (
					<div className='shop-cart'>
						{items.map((obj) => {
							return <div>{obj.price},{obj.count}</div>
						})}
					</div>
				)}
			</div>
			<div className='presentation'>
			</div>
			<Categories />
			<Sort />
		</header>
	);
}

export default Header;