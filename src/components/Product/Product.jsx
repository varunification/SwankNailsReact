import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './Item';
import Service from '../../appwrite/config';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [heading, setHeading] = useState('Products'); // Initialize with 'Products'

    const { slug } = useParams();

    const fetchProducts = async () => {
        try {
            const response = await Service.getProduct();
            if (response?.documents) {
                setProducts(response.documents);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter logic
        if (slug) {
            const filtered = products.filter(product => product.Category === slug);
            setFilteredProducts(filtered);
            setHeading(filtered[0]?.Heading || 'No products found');
        } else {
            setFilteredProducts(products);
            setHeading('Products');
        }
    }, [slug, products]); // Only depend on slug and products

    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 place-items-center sm:mt-20 gap-3 mb-3 mt-5">
                <h1 className="text-3xl font-bold text-center">
                    {heading}
                </h1>
            </div>

            <div className="grid grid-cols-2 place-items-center sm:mt-20 gap-3 mb-5">
                {(slug ? filteredProducts : products).map((data) => (
                    <Item
                        key={data.$id}
                        prod={{
                            id: data.$id,
                            title: data.text,
                            image: data.image,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}