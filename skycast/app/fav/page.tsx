"use client";
import React, {useRef} from 'react';
import HeroImage from "@/app/ui/components/HeroImage";
import NavBar from "@/app/ui/components/NavBar";
import FavCityCard from "@/app/ui/components/FavCityCard";



export default function Page() {
    const mainRef = useRef<HTMLElement|null>(null)
  return (
      <main className="flex flex-col" ref={mainRef}>
          <NavBar target={mainRef}/>
          <HeroImage path="/img/banner.jpg"/>
          <h1>This is the Liked Cities page</h1>
          <FavCityCard />
      </main>
  );
}
