import React from 'react';
import img from '../../images/_MG_9722.JPG';

const About = () => {
    return (
        <div className="container">
            <div className="bg-info">
                <div className="mx-5 mt-5 ">
                    <div className=" row p-5 ">
                        <div className="col-6 fw-bold">
                            <h1>About Us</h1>
                        </div>
                        <div className="col-6">
                            <h5 className="text-end">Home &gt; About us</h5>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row m-5">
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-6 col-md-6 px-4">
                    <h2>We use design to help businesses Launch products, brands and ideas.</h2>
                    <br />
                    <hr className="text-danger" />
                </div>
                <div className="col-lg-3 col-md-3"></div>
            </div>
            <div className="mx-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img className="w-100 ms-5 " src={img} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12 text-start px-5">
                        <p>
                            As a digital partner we provide brands with tailored solutions that drive human behavior and engagement. We understand that every consumption point with a brand is an opportunity to connect and influence. At Marvis we exist to inspire those millions of purposeful customer interactions through branding and online experiences.</p><br />
                        <p>
                            <span className="fs-6 fw-bold">Create Your Custom E-Signature In Few Simple Steps</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum consectetur turpis, et fermentum ipsum semper elementum. Sed ac nulla fringilla, aliquam orci vitae, ultrices nunc. In sed risus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p><br />
                        <h4>“We produce great website designs that audiences understand and interact with. Creating code that is clean, compliant and accessible. Compatible with all the major browsers and responsive in design”</h4>

                    </div>
                </div>
                <hr />
            </div>
            <div className="mx-5">
                <div className="row text-start p-3">
                    <div className="col-md-6 ">
                        <div className="col-12  d-flex">
                            <div>
                                <h4>MEASURING VALUES</h4>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit,
                                    eiusmod tempor incididunt ut labore.</p>
                            </div>
                            <div>
                                <h4>TEAM INTEGRITY</h4>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit,
                                    eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div><br />
                        <div className="col-12 d-flex">
                            <div>
                                <h4>OUR INNOVATIONS</h4>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit,
                                    eiusmod tempor incididunt ut labore.</p>
                            </div>
                            <div>
                                <h4>
                                    OUR EXPERIENCE</h4>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit,
                                    eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="bg-warning p-5">Action of the human immune system</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;