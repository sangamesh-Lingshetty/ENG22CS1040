import React, { useState } from 'react';
import data from '../database/data';
import CardContainer from './CardContainer';
import Header from './Header';

const Homes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const productNames = [
        "Laptop",
        "Mouse",
        "Keyboard",
        "Smartphones",
        "Headphones",
        "Tablet",
        "Bihar",
        "Desktop",
    ];

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filteredProducts = data.filter(product =>
            productNames.includes(product.title) && product.title.toLowerCase().includes(searchValue)
        );
        setFilteredData(filteredProducts);
    };

    return (
        <>
            <div className="search-container">
                
            </div>
            <h1>All products</h1>
            <CardContainer items={searchTerm ? filteredData : data} />
        </>
    );
}

export default Homes;
