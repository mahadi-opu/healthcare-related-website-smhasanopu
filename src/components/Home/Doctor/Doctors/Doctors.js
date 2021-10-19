import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('syedhealthcare.json')
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])
    return (
        <div className="bg-gallary p-4">
            <h2 className="pb-3">Team of Doctor's</h2>
            <div className="container">
                {/* Hover-Fall Effect */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;