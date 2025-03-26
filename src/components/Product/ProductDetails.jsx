import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../../appwrite/config';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Service.getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (error) return <div className="container mx-auto p-4 h-12">{error.message}</div>;
  if (!product) return <div className="container mx-auto p-4 h-12">Loading...</div>;

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
        <div className="bg-white p-4 rounded-lg shadow flex flex-col">
          {product.video_url ? (
            <>
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src={product.video_url} 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="mt-4">
                <h1 className="text-3xl font-bold mb-4">{product.text}</h1>
                <p className="text-gray-700 mb-4">{product.Heading}</p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">{product.text}</h1>
              <p className="text-gray-700 mb-4">{product.Heading}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;