import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div className="service">
            <div className="container">
                <h2 className="text-primary">Our services</h2>
                <div className="row mt-5" >
                    {
                        services.slice(0, 6).map(service =>

                        (
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="m-2">
                                    <img className="w-100" src={service.img} alt="" />
                                    <div className="p-3 text-start bg-light">
                                        <h5>{service.name}</h5>
                                        <p>{service.description}</p>
                                        <h6>Service Price : {service.price}</h6>
                                        <div className="text-center mt-3">
                                            <Link to={`/details/${service.id}`}>
                                                <button className="btn bg-primary text-white px-5 text-center">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;