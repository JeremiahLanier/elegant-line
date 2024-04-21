// src/features/products/ProductPage.js
import React from 'react';
import { Page1, Page2, Page3, Page4 } from './styles/PageStyles';

const ProductPage = ({ pageType, product }) => {
    const PageComponent = (() => {
        switch (pageType) {
            case 1:
                return Page1;
            case 2:
                return Page2;
            case 3:
                return Page3;
            case 4:
                return Page4;
            default:
                return Page1;
        }
    })();

    return (
        <PageComponent>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button>Add to Cart</button>
        </PageComponent>
    );
};

export default ProductPage;
