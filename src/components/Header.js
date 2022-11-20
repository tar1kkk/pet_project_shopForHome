import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Categories from './Categories';
import Sort from './Sort';

function Header() {
	const [cartOpen, setCartOpen] = useState(false);

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