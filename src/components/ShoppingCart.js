import React, { useState } from 'react';

const ShoppingCart = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductChange = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  const handleCheckout = () => {
    // You can implement the checkout logic here, e.g. sending data to a backend.
    console.log('Checkout clicked for products:', selectedProducts);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleProductChange(product.id)}
              />
              {product.name} - ${product.price}
            </label>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
