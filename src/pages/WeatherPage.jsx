import React from 'react';
import Current from '../components/Current';
import MapLocation from '../components/MapLocation';
import PopularCity from '../components/PopularCity';

const WeatherPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-5 p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/4 w-full flex items-center justify-center">
          <Current />
        </div>
        <div className="md:w-2/4 w-full flex items-center justify-center">
          <MapLocation />
        </div>
        <div className="md:w-1/4 w-full flex items-center justify-center">
          <PopularCity />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
