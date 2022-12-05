import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { changePages } from '../redux/slices/FilterSlice';
import stl from './Pagination.module.css';

function Pagination() {
	const dispatch = useDispatch();
	const { currentPage } = useSelector(state => state.FilterSlice);
	return (
		<ReactPaginate
			className={stl.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={e => dispatch(changePages(e.selected + 1))}
			pageRangeDisplayed={4}
			pageCount={2}
			forcePage={currentPage - 1}
			renderOnZeroPageCount={null}
		/>
	);
}

export default Pagination;