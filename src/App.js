import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './components/Pagination';
import { Route, Routes } from 'react-router-dom';
import FullItems from './components/FullItems';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId, sort, currentPage } = useSelector(state => state.FilterSlice);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(`https://636fc0d4bb9cf402c81ee749.mockapi.io/items?page=${currentPage}&limit=6&${categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sort}&order=desc`);
    const data = await response.json();
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [categoryId, sort, currentPage])


  return (
    <div className="wrapper" >
      <Header />
      <Routes>
        <Route path="/" element={<Items items={items} loading={loading} />} />
        <Route path="/items/:id" element={<FullItems />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Pagination />
      <Footer />
    </div>
  );
}



export default App;
