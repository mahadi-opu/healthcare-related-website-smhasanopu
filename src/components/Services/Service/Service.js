import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, info, img } = props.service;
    return (
        <div>
            <div className="col service-card mb-5">
                <div className="card">
                    <img src={img} className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{info}</p>
                    </div>
                    <Link className="btn btn-sm btn-danger" to={`/Details/${id}`}>Details</Link>

                </div>
            </div>
        </div>
    );
};

export default Service;