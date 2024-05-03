"use client";
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

import SearchBar from '@/app/ui/components/SearchBar';
import NavBar from './ui/components/NavBar';
// import HeroImage from './ui/components/HeroImage';
import CityBox from './ui/components/CityBox';
import FeatureContainer from './ui/components/FeatureContainer';
import LandingBanner from './ui/components/LandingBanner';

export default function Page() {
  // todo: make a object with all the cities and their country [{country:name, cities:[city1, city2, city3]}, {country:name, cities:[city1, city2, city3]}
  const cities = [
                {"country": "Austria", "cities": ["Vienna", "Linz", "Graz", "St. Pölten", "Salzburg", "Innsbruck"]},
                {"country": "Germany", "cities": ["Munich", "Hamburg", "Berlin", "Dresden", "Cologne"]}]

  const cities_austria = ["Vienna", "Linz", "Graz", "St. Pölten", "Salzburg", "Innsbruck"];
  const cities_germany = ["Munich", "Hamburg", "Berlin", "Dresden", "Cologne"];

  const [result, setResult] = useState("");

  return (
    <main className="flex flex-col">
      <LandingBanner />
      <NavBar />

      <div className=' relative flex flex-col items-center m-4'>
        <FeatureContainer />
      </div>

      <div className='relative flex flex-col items-center m-10 md:m-16'>
        <div className='flex flex-col w-full md:w-3/4'>
          <div className="flex flex-col md:flex-row justify-between items-center p-2">
            <h1 className="text-xl font-bold text-skycast-IndigoDye pb-2 md:pb-0">Our Weather Prediction</h1>
            <SearchBar setResult={setResult}/>
          </div>

          <div>
            <h2 className='font-bold p-2 text-lg text-skycast-IndigoDye'> Austria </h2>
            <CityBox cities={cities_austria} />
          </div>

          <div>
            <h2 className='font-bold p-2 text-lg text-skycast-IndigoDye'> Germany </h2>
            <CityBox cities={cities_germany} />
          </div>

          </div>
      </div>
    </main>
  );
}
