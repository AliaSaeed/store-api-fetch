import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import './App.css';
import './components/styles.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    // Fetch products
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    if (category === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="App">
      <Categories categories={categories} onSelectCategory={handleCategorySelect} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
