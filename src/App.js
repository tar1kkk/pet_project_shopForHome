
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';

function App() {
  const items = [
    { id: 1, title: 'Стул серый', img: 'chair-grey.jpeg', desc: 'Lorem 10 lor', category: 'chairs', price: '49.99' },
    { id: 2, title: 'Стол', img: 'table.jpg', desc: 'Lorem 101 lor5', category: 'tables', price: '149.99' },
    { id: 3, title: 'Диван', img: 'sofa.jpg', desc: 'Lorem 10 lor1025', category: 'sofa', price: '549.99' },
    { id: 4, title: 'Лампа', img: 'light.jpg', desc: 'Lorem 10 lor1212', category: 'light', price: '25.00' },
    { id: 5, title: 'Стул белый', img: 'chair-white.jpg', desc: 'Lorem 10 lor12312313', category: 'chairs', price: '49.99' },
  ]
  return (
    <div className="wrapper" >
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
}



export default App;
