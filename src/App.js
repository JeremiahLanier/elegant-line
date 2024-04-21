import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './features/products/ProductPage';
import HomePage from './components/HomePage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import CheckoutForm from './components/CheckoutForm';
import './App.css'; // Ensure you have an App.css for basic styling

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from an API
  useEffect(() => {
    async function fetchProducts() {
      try {
        // Replace 'https://api.yoursite.com/products' with your actual API URL
        const response = await fetch('https://api.yoursite.com/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <Router>
        <UserProvider> {/* Provide user context throughout the application */}
          <CartProvider> {/* Provide cart context throughout the application */}
            <Switch>
              <Route path="/" exact component={HomePage} />
              {products.map((product) => (
                  <Route
                      key={product.id}
                      path={`/product/${product.id}`}
                      render={() => <ProductPage product={product} />}
                  />
              ))}
              <Route path="/checkout" component={CheckoutForm} />
              {/* Additional routes can be added here */}
            </Switch>
          </CartProvider>
        </UserProvider>
      </Router>
  );
}

export default App;
