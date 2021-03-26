import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const { product: { product_name, id, product_varieties } } = props;
    return ( 
        <div className="card">
            <Link>
                <img className="medium" src={product_varieties[0].images[0]} alt={product_varieties[0].images[0]}/>
            </Link>
            <div className="card-body">
                <div className="name">
                   <Link to={`/products/${id}`}>{product_name}</Link>
                </div>
                <div className="price">
                   N{product_varieties[0].price}
                </div>
                <div className="view-details">
                   <Link to={`/products/${id}`}>view varieties</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Products;