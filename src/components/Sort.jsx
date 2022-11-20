import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/FilterSlice";


function Sort() {
	const dispatch = useDispatch();
	const { sort } = useSelector(state => state.FilterSlice);
	const list = [
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' }
	];

	return (
		<div>
			<select value={sort} onChange={(e) => dispatch(setSort(e.target.value))}>
				<option>Default</option>
				{list.map((obj) => {
					return <option value={obj.sortProperty} > {obj.name}</option>
				})}
			</select>
		</div >
	)
}

export default Sort;