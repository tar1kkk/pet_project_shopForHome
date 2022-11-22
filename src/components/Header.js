import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Categories from './Categories';
import Sort from './Sort';
import AddToCart from './AddToCart';

function Header() {
	const [cartOpen, setCartOpen] = useState(false);
	const { items, totalPrice } = useSelector(state => state.CartSlice);

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
					<div>
						{items.map((obj) => {
							return <AddToCart {...obj} />
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