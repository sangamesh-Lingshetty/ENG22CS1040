import React from 'react';
import Card from './Card';

const CardContainer = ({ items = [] }) => {
    return (
        <div className='container'>
            {items.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
};

export default CardContainer;
