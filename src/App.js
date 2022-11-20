import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector(state => state.FilterSlice);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(`https://636fc0d4bb9cf402c81ee749.mockapi.io/items?category=${categoryId === 0 ? '' : categoryId}&sortBy=${sort}`);
    const data = await response.json();
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [categoryId, sort])


  return (
    <div className="wrapper" >
      <Header />
      <Items items={items} loading={loading} />
      <Footer />
    </div>
  );
}



export default App;
