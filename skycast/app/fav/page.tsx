"use client";
import React, { useRef } from 'react';
import HeroImage from "@/app/ui/components/HeroImage";
import FavBanner from '@/app/ui/components/fav/favBanner';
import NavBar from "@/app/ui/components/NavBar";
import FavCityCard from "@/app/ui/components/FavCityCard";
import EmbeddingURL from "@/app/ui/components/EmbeddingURL";
import { useSearchParams } from "next/navigation";


export default function Page() {
  // parse the page urls search parameters
  const param = useSearchParams();

  return (
    <main className="flex flex-col">
      <NavBar target={null} />
      <FavBanner />
      <EmbeddingURL />
      <FavCityCard urlParam={param} />
    </main>
  );
}
