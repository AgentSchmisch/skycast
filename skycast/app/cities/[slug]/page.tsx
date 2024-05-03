import React from 'react';
import NavBar from '@/app/ui/components/NavBar';
import HeroImage from '@/app/ui/components/HeroImage';

export default function Page( { params }: { params: { slug: string } }) {
    let data = getCityData(params.slug);

    function getCityData(slug: string) {
        // This function will fetch the weather data of the selected city from the API
        return ""
    }
  
  return (
    <main className="flex flex-col">
        <NavBar />
        <HeroImage path="/img/banner.jpg" />
        <p>This is the city detail page for { decodeURI(params.slug) }</p>
    </main>
  );
}
