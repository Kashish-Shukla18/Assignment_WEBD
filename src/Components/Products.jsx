import React from "react";

const Products = () => {
    return (
    <div>
        <div className="container mx-auto px-4 py-8 h-1/3 flex flex-col sm:flex-row items-center">
            <div className="max-w-md mx-auto sm:mr-8">
                <img src="product-image-url" alt="Product" className="w-full" />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Product Name</h2>
                <p className="text-lg mt-2">About the Product: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula est vitae tortor volutpat, at sodales metus ultricies.</p>
                <p className="text-xl font-semibold mt-4"> ₹ 1000</p>
                <button className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">Add to Cart</button>
            </div>
        </div>
        <div className="container mx-auto px-4 py-8 h-1/3 flex flex-col sm:flex-row items-center">
            <div className="max-w-md mx-auto sm:mr-8">
                <img src="product-image-url" alt="Product" className="w-full" />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Product Name</h2>
                <p className="text-lg mt-2">About the Product: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula est vitae tortor volutpat, at sodales metus ultricies.</p>
                <p className="text-xl font-semibold mt-4"> ₹ 1000</p>
                <button className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">Add to Cart</button>
            </div>
        </div>
        <div className="container mx-auto px-4 py-8 h-1/3 flex flex-col sm:flex-row items-center">
            <div className="max-w-md mx-auto sm:mr-8">
                <img src="product-image-url" alt="Product" className="w-full" />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Product Name</h2>
                <p className="text-lg mt-2">About the Product: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula est vitae tortor volutpat, at sodales metus ultricies.</p>
                <p className="text-xl font-semibold mt-4"> ₹ 1000</p>
                <button className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default Products;
