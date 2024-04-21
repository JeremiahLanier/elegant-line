import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Ensure you import the useDispatchCart hook if it's a custom hook
import { useDispatchCart } from '../../context/CartContext';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);
    const dispatch = useDispatchCart();  // Correct usage of the dispatch function from your cart context

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`/api/products/${match.params.id}`);
                setProduct(data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
                // Handle errors, perhaps by setting an error state and displaying a message
            }
        };

        fetchProduct();
    }, [match.params.id]);

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: product
        });
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
