/// src/components/Homepage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Portal = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 60s linear infinite;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Homepage = () => {
    return (
        <Portal>
            <ProductImage src="product1.jpg" style={{ transform: 'translate(-50%, -50%)' }} />
            <ProductImage src="product2.jpg" style={{ transform: 'translate(-50%, -50%) rotate(90deg)' }} />
            <ProductImage src="product3.jpg" style={{ transform: 'translate(-50%, -50%) rotate(180deg)' }} />
            <ProductImage src="product4.jpg" style={{ transform: 'translate(-50%, -50%) rotate(270deg)' }} />
        </Portal>
    );
};

export default Homepage;
