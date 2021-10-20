import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { serviceId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = ('/servicesDetails.json');
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.services))
    }, [])

    useEffect(() => {
        const foundService = details.find(detail => detail.id === serviceId)
        console.log(foundService);
    }, [details])


    return (
        <div>
            <h3> Service {serviceId}</h3>
            {/* <h1>{service.name}</h1>
            <h4>{service.price}</h4> */}
        </div>
    );
};

export default Details;