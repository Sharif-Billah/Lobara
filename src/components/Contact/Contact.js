import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="bg-info">
                <div className="m-5 ">
                    <div className=" row p-5 ">
                        <div className="col-6">
                            <h5 className="text-start">Home &gt; Contact us</h5>
                        </div>
                        <div className="col-6 fw-bold">
                            <h1>Contact Us</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row m-5">
                <div className="col-lg-2 col-md-3"></div>
                <div className="col-lg-8 col-md-6 px-4 text-danger">
                    <h1>Need a Support Get in Touch</h1>
                    <br />
                    <hr className="text-danger" />
                </div>
                <div className="col-lg-2 col-md-3"></div>
            </div>
            <div className="row">

                <div className="col-md-6 bg-secondary text-white"><br />
                    <div>
                        <h2>PHONE</h2>
                        <h6>+91-9849439980/+91-8019078261</h6>
                    </div><br />
                    <div>
                        <h2>Email</h2>
                        <h6>Info@aivah.com</h6>
                    </div><br />
                    <div>
                        <h2>LOCATION</h2>
                        <h6>Flat #204,Subhaga Complex,B/s Andhra Bank,Saidabad,Hyderabad – 500059
                        </h6>
                    </div><br />
                    <div>
                        <h2>OFFICE TIME
                        </h2>
                        <h6>09:00 am – 07: 00 pm</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="w-100 m-5  " src="https://i.pinimg.com/736x/fc/86/d3/fc86d372831362acd218e2fca1aa7f69.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;