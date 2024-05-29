import React, { useRef, Suspense } from 'react';
import HeroImage from "@/app/ui/components/HeroImage";
import FavBanner from '@/app/ui/components/fav/FavBanner';
import NavBar from "@/app/ui/components/NavBar";
import FavCityCard from "@/app/ui/components/FavCityCard";
import EmbeddingURL from "@/app/ui/components/EmbeddingURL";




export default async function Page( params:any ) {
  // parse the page urls search parameters

  return (
    <main className="flex flex-col">
      <NavBar target={null} />
      <FavBanner />
      <EmbeddingURL />
      <FavCityCard urlParam={params.searchParams} />
    </main>
  );
}
