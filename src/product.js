import React from 'react';
import ReactDOM from 'react-dom';

let Product = ({match}) =>
    <div>Product is {match.params.productName}</div>

export default Product;