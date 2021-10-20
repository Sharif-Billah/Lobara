import React from 'react';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="row mx-5 py-5 text-start">
                <div className="col-3 p-3">
                    <img className="text-white" src={logo} alt="" /><br /><br /><br />
                    <h5 className="fs-bold">Labora is a creative & powerful medical and laboratory wordpress theme that suits all your business needs</h5>

                </div>
                <div className="col-3 p-3">
                    <h2>Quick Links</h2><br />
                    <p>Life Insurance</p>
                    <p>Home Insurance</p>
                    <p>Child Insurance</p>
                    <p>Family Helth Plan</p>
                    <p>Company Insurance</p>
                </div>
                <div className="col-3 p-3">
                    <h2>Useful Link</h2><br />
                    <p>Life Insurance</p>
                    <p>Home Insurance</p>
                    <p>Child Insurance</p>
                    <p>Family Helth Plan</p>
                    <p>Company Insurance</p>
                </div>
                <div className="col-3 p-3">
                    <h2>Labora Recent Posts</h2><br />
                    <h6>Exploring Anatomy & Physlology in the Laboratory</h6>
                    <p><small>August 4,2021</small></p>
                    <hr />
                    <h6>Mediclne Diagnosis of Disease in Clinical Laboratory</h6>
                    <p><small>August 4,2021</small></p>
                    <hr />
                </div>
                <hr />
                <p>&copy; Copyright 2021 Labora. All Right Resaved. Designed by AivahThemes</p>
            </div>
        </div>
    );
};

export default Footer;