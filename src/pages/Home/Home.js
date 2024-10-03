import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home({ onProductSelect }) {

    const [products, setProducts] = useState([]);
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [selectedProductName, setSelectedProductName] = useState('[]');

    useEffect(() => {

        axios.get('https://portal-dev.lemp.vn/products')
            .then((response) => {

                const serverData = response.data.find(item => item.slug === 'server');
                if (serverData) {
                    setProducts(serverData.products);
                }
            })
            .catch((error) => {
                console.error("Có lỗi khi tải dữ liệu: ", error);
            });
    }, []);


    const handleProductClick = (product) => {
        setSelectedPackages(product.Packages);
        setSelectedProductName(product.name);
    };



    return (
        <div>
            <h1>Server Products</h1>
            <h1>Server Products2</h1>
            <h1>Server Products34</h1>
            <h1>Server Products</h1>

            <div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
                            <h3>{product.name}</h3>
                            <p>{product.descriptions}</p>
                            <img src={product.thumb} alt={product.name} />
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>

            {selectedPackages.length > 0 && (
                <div>
                    <h2>Packages for {selectedProductName}</h2>
                    <ul>
                        {selectedPackages.map((pkg) => (
                            <li key={pkg.id}>
                                <h4>{pkg.name}</h4>
                                <p>RAM: {pkg.ram} GB</p>
                                <p>CPU: {pkg.cpu} Core</p>
                                <p>Storage: {pkg.storage}</p>
                                <p>Price: {pkg.price} VND</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

}

export default Home;


