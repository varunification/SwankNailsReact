import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './Item';
import Service from '../../appwrite/config';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [heading, setHeading] = useState('Products');

    const { slug } = useParams();

    const fetchProducts = async () => {
        try {
            const response = await Service.getProducts();
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
        if (slug) {
            const filtered = products.filter(product => product.Category === slug);
            setFilteredProducts(filtered);
            setHeading(filtered[0]?.Heading || slug);
        } else {
            setFilteredProducts(products);
            setHeading('Products');
        }
    }, [slug, products]);

    return (
        <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 place-items-center sm:mt-10 gap-2 mb-6">
                <h1 className="text-3xl font-bold text-center">
                    {heading}
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {(slug ? filteredProducts : products).map((data) => (
                    <Link 
                        key={data.$id}
                        to={`/ProductDetail/${data.$id}`}
                        className="block h-full transition-transform hover:scale-[1.02]"
                    >
                        <Item
                            prod={{
                                id: data.$id,
                                title: data.text || data.title,
                                image: data.image,
                                price: data.price,
                                description: data.description
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}