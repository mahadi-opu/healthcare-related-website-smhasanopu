import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/mediguss.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);
    return [services, setServices]
};

export default useServices;