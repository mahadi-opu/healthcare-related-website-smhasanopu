import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer
                className="text-center text-lg-start text-white"
            >


                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3 pt-5">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold">Syed Health Care</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto cus-hr"

                                />
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Service</h6>
                                <hr />
                                <p>
                                    <Link to="/Services" className="text-white">Pediatrics</Link>
                                </p>
                                <p>
                                    <Link to="/Services" className="text-white">Cardiology</Link>
                                </p>
                                <p>
                                    <Link to="#/Services" className="text-white">Neurosurgery</Link>
                                </p>
                                <p>
                                    <Link to="/Services" className="text-white">Cancer Care</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column -->  */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Menu</h6>
                                <hr />
                                <p>
                                    <Link to="/Services" className="text-white">Services</Link>
                                </p>
                                <p>
                                    <Link to="/Blogs" className="text-white">Blog's</Link>
                                </p>
                                <p>
                                    <Link to="/AboutUs" className="text-white">About Us</Link>
                                </p>
                                <p>
                                    <Link to="/Contactus" className="text-white">Contact Us</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3 copy-right"
                >
                    © 2021 Copyright:
                    <Link className="text-danger" to="https://mahadiopu.com/">S.M.Hasan Opu</Link>
                  

                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;