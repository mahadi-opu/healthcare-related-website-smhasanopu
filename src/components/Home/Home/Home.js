import React from 'react';
import Services from '../../Services/Services/Services';
import Doctors from '../Doctor/Doctors/Doctors';
import Slider from '../Slider/Slider';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Why></Why>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;