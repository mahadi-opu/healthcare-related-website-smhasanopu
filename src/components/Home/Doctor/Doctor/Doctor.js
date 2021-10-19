import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { img, name } = props.doctor;
    return (
        <div>
            <div className="col">
                <div className="fall-item fall-effect">
                    <img src={img} alt="" />
                    <div className="mask">
                        <h2>{name}</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <Link to="#" className="btn btn-sm btn-danger">Visit</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;