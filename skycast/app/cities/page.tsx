"use client";
import { useRef, useState } from 'react';
import LandingBanner from "@/app/ui/components/LandingBanner";
import CitiesSearchbar from "@/app/ui/components/cities/CitiesSearchbar";
import CitiesBanner from "@/app/ui/components/cities/CitiesBanner";
import NavBar from '@/app/ui/components/NavBar';

export default function Page() {
  const [result, setResult] = useState("");

  const mainRef = useRef<HTMLElement | null>(null)
  return (
    <main className="flex flex-col" ref={mainRef}>
      <NavBar target={null}/>
      <CitiesBanner />
      <CitiesSearchbar setResult={setResult} />
    </main>
  );
}
