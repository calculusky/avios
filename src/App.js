import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';

function App() {
  return (
   <BrowserRouter>
    <div className="grid-container">
      <header>
        <nav className="navbar row">
          <div className="navbar-brand">
            <Link to="/">Avios</Link>
          </div>
          <div className="navbar-link">
            <ul>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/products/:id" component={ProductDetailScreen}/>

      </main>
      <footer className="row center">
          All rights reserved &copy; Avios 2021
      </footer>
    </div>
   </BrowserRouter>
  );
}

export default App;
