"use client";
import React, {useRef} from 'react';
import HeroImage from "@/app/ui/components/HeroImage";
import NavBar from "@/app/ui/components/NavBar";
import FavCityCard from "@/app/ui/components/FavCityCard";
import EmbeddingURL from "@/app/ui/components/EmbeddingURL";



export default function Page() {
  return (
      <main className="flex flex-col">
          <NavBar target={null}/>
          <HeroImage image="/img/banner.jpg"/>
          <h1>This is the Liked Cities page</h1>
          <EmbeddingURL />
          <FavCityCard />
      </main>
  );
}
