import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, product_name, summary, img }) => {
    return (
        <div className='cardcontainer'>
            <img src={img} className="card-img-top" alt={product_name} />
            <div className="card-body">
                <h5 className="card-title">{product_name}</h5>
                <p className="card-text">{summary}</p>
                <Link to={`/details/${id}`} className="btn btn-primary">More Details</Link>
            </div>
        </div>
    );
}

export default Card;
