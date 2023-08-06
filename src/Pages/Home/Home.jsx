import React from 'react';
import PopularTour from '../PopularTour/PopularTour';
import TravelPackages from '../TravelPackages/TravelPackages';

const Home = () => {
    return (
        <div className=''>
            <h2 className='text-center py-12 text-2xl'>This is Home Page</h2> 
            <TravelPackages></TravelPackages>
            <PopularTour></PopularTour>
        </div>
    );
};

export default Home;