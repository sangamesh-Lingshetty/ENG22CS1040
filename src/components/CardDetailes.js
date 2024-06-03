import React from 'react';
import Data from "./../database/data";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardDetailes = () => {
    const { id } = useParams();
    const item = Data.find(item => item.id === parseInt(id));

    if (!item) {
        return <h1>Item not found</h1>;
    }

    const bookingHandler = (id) =>{
        console.log(id);
        toast.success("Booked!");
        // toast.info("Booked!")
        // toast.error("error")
        // toast.warning("warning")
       
    }

    return (
        <div className='card-detail'>
            
            <div className='bodypart'>
                <img src={item.img} className="card-img-top" alt={item.product_name} />
                <div className="card-body">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="card-text">{item.summary}</p>
                    <p className="card-text">{item.company_name}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Rating: {item.rating}</p>
                    <p className="card-text">Delivery: {item.delivery}</p>
                    <h4>Specifications</h4>
                    <ul>
                        <p className="card-text">Processor: {item.Specifications.Processor}</p>
                        <p className="card-text">RAM: {item.Specifications.RAM}</p>
                        <p className="card-text">Storage: {item.Specifications.Storage}</p>
                        <p className="card-text">ModelNumber: {item.Specifications.ModelNumber}</p>
                        <p className="card-text">PartNumber: {item.Specifications.PartNumber}</p>
                    </ul>
                    <button className='btn btn-primary' onClick={()=>bookingHandler(id)}>Book now</button>
                </div>
            </div>
        </div>
    );
}

export default CardDetailes;
