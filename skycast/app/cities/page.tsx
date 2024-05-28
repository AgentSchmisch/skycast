"use client";
import React, {useRef} from 'react';
import LandingBanner from "@/app/ui/components/LandingBanner";
import NavBar from "@/app/ui/components/NavBar";

export default function Page() {
    const mainRef = useRef<HTMLElement|null>(null)
    return (
        <main className="flex flex-col" ref={mainRef}>
            <LandingBanner />
            <NavBar target={null} />
      <h1>This is the all cities page</h1>
    </main>
  );
}
