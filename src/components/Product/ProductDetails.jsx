import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../../appwrite/config';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Service.getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img 
            src={product.image} 
            alt={product.heading} 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        {/* Product Info */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4">{product.text}</h1>
          <p className="text-gray-700 mb-4">{product.Heading}</p>
          {/* <p className="text-2xl font-bold text-blue-600">
            ${product.price?.toFixed(2) || 'N/A'}
          </p> */}
          {/* Add more details or purchase button here */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;