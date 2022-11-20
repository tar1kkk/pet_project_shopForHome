import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/FilterSlice";

function Categories({ value, onChangeCategory }) {
	const { categoryId, sortBy } = useSelector(state => state.FilterSlice);
	const dispatch = useDispatch();

	const catgories = [
		'Все',
		'Стулья',
		'Столы',
		'Диваны',
		'Лампы',
	]

	return (
		<div className="categories">
			<ul>
				{catgories.map((categoryName, i) => (
					<li key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? 'active' : ''}>{categoryName}</li>
				))}
			</ul>
		</div>
	)
}

export default Categories;