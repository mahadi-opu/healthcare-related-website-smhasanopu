import React from 'react';
import { Link } from 'react-router-dom';
import './Why.css';

const Why = () => {
    return (
        <div className="why-bg">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <h2>Why Choose Us?</h2>
                        <hr />
                        <Link className="btn btn-danger" to="/Aboutus">About Us</Link>
                    </div>
                    <div className="col">
                        <p><small>The Syed healthcare system is the world’s best, according to the World Health Organization. By all measurements, from the ratio of doctors to patients to the length of wait times, Syed healthcare consistently delivers strong results.</small></p>
                    </div>
                    <div className="col">
                        <h4>Booking Now</h4>
                        <hr />
                        <h5>24/7 service available</h5>
                        <address>Call for seriul: +880 1521 312761</address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;