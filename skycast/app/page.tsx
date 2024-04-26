import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import SearchBar from '@/app/ui/components/SearchBar';
import NavBar from './ui/components/NavBar';
import HeroImage from './ui/components/HeroImage';
import CityBox from './ui/components/CityBox';
import FeatureContainer from './ui/components/FeatureContainer';

export default function Page() {
  const cities = ["Vienna", "Linz", "Graz", "St. Pölten", "Salzburg", "Innsbruck"];

  return (
    <main className="flex flex-col">
      <HeroImage />
      <NavBar activePage="index" />

      <div className=' relative flex flex-col items-center m-4'>
      <FeatureContainer />
      </div>

      <div className='relative flex flex-col items-center m-16'>
        <div className='flex flex-col w-3/4'>
        <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-skycast-IndigoDye">Our Weather Prediction</h1>
        <SearchBar/>
        </div>

        <h2 className='font-bold py-2 text-lg text-skycast-IndigoDye'>Austria</h2>
          <CityBox cities={cities} />
        </div>
      </div>
    </main>
  );
}
