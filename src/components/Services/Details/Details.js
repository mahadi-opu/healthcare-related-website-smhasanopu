import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';

const Details = () => {

    let { id } = useParams();
    const dId = parseFloat(id)
    const [services] = useServices();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const foundDetails = services.find(service => service.id === dId)
        setDetail(foundDetails);
    }, [services, dId])
    return (
        <div className="container">
            <div className="row pt-5 ">
                <div className="col-md-6">
                    <img className="img-fluid" src={detail?.img} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-danger">{detail?.name}  </h2>
                    <hr className="border-danger border-3" />
                    <hr className="border-danger border-3" />
                    <p>{detail?.description}</p>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <button className="btn btn-info text-white ">Visiting Fee: ${detail?.price}</button></div>
                        <div className="col-md-6">
                            <Link to="/services"><button className="btn btn-danger text-white ">Services </button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default Details;