import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Service from '../../appwrite/config';

export default function Product() {
    // State to store the products fetched from Appwrite
    const [products, setProducts] = useState([]);
    const [heading, setHeading] = useState('');

    // Function to fetch products from Appwrite
    const fetchProducts = async () => {
        try {
            console.log("Fetching all products...");

            // Call the getProduct method to fetch all products
            const response = await Service.getProduct();

            if (response && response.documents) {
                console.log("Products fetched successfully:");
                console.log(response.documents); // Log the list of products
                setProducts(response.documents); // Update state with fetched products

                // Set the heading from the first product
                if (response.documents.length > 0) {
                    setHeading(response.documents[0].Heading);
                }
            } else {
                console.log("No products found or an error occurred.");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Heading Section */}
            <div className="grid grid-cols-1 place-items-center sm:mt-20 gap-3 mb-3 mt-5">
                <h1 className="text-3xl font-bold text-center">
                    {heading}
                </h1>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 place-items-center sm:mt-20 gap-3 mb-5">
                {products.map((data) => (
                    <Item
                        key={data.$id} // Use the unique ID from Appwrite
                        prod={{
                            id: data.$id,
                            title: data.text, // Use the text field from Appwrite
                            image: data.image, // Use the image field from Appwrite
                        }}
                    />
                ))}
            </div>
        </div>
    );
}