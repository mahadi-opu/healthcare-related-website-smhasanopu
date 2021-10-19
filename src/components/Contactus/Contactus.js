import React from 'react';
import './Contactus.css';

const Contactus = () => {
    return (
        <div>
            <div>
                <div className="container contact-form">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </div>
                    <form>
                        <h3>Contact Us</h3>
                        <div className="row">

                            <div className="col-md-12">
                                <div className="form-group py-2">
                                    <input type="text" name="txtName" className="form-control p-3" placeholder="Your Name *" readOnly="" required />
                                </div>
                                <div className="form-group py-2">
                                    <input type="text" name="txtEmail" className="form-control p-3" placeholder="Your Email *" readOnly="" required />
                                </div>
                                <div className="form-group py-2">
                                    <input type="text" name="txtPhone" className="form-control p-3" placeholder="Your Phone Number *" required />
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="form-group py-3">
                                    <textarea name="txtMsg" className="form-control p-3" placeholder="Your Message *"   ></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group py-3">
                                    <input type="submit" name="btnSubmit" className="btnContact btn-warning" readOnly="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;