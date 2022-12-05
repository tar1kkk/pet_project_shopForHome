import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import Sort from './Sort';
import AddToCart from './AddToCart';
import { changeSearch } from '../redux/slices/FilterSlice';

function Header() {
	const [cartOpen, setCartOpen] = useState(false);
	const { items, totalPrice } = useSelector(state => state.CartSlice);
	const { valueSearch } = useSelector(state => state.FilterSlice);
	const dispatch = useDispatch('');
	console.log(valueSearch)

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
							return <AddToCart {...obj} />
						})}
					</div>
				)}
			</div>
			<div className='presentation'>
			</div>
			<Categories />
			<Sort />
			<input value={valueSearch} onChange={e => dispatch(changeSearch(e.target.value))} placeholder='Поиск товаров...' />
		</header>
	);
}

export default Header;