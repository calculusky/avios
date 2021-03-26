import React, { useState } from 'react';
import './ProductVariety.css';

const ProductVariety = (props) => {

    const [qty, setQty] = useState(1);

    const { variety } = props;

    const addToCartHandler = () => {
        props.redirect.push('/cart')
    }
    return ( 
        <div className="card">
            <div className="variety-images">
                {
                    variety.images.map((image, index) => {
                       return  <div className="img-container"><img className="medium" src={image} alt={image} key={index}/></div>
                    })
                }
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div>Size</div>
                            <div>{variety.size}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Color</div>
                            <div>{variety.color}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Quantity</div>
                            <div>{variety.quantity}</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="card-sub card-body">
            <ul>
                <li>
                    <div className="row">
                        <div>Price</div>
                        <div className="price">N{variety.price}</div>
                    </div>
                </li>
                {
                    <div>
                        <li>
                            <div className="row">
                                <div>Quantity</div>
                                <div>
                                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                        { [...Array(parseFloat(variety.quantity)).keys()].map(n => {
                                            return <option key={n+1} value={n+1}>{n+1}</option>
                                        }) }
                                    </select>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                        </li>
                    </div>
                }
                
            </ul>
            </div>
        </div>
     );
}
 
export default ProductVariety;