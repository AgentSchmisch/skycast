import React from 'react';
import NavBar from "@/app/ui/components/NavBar";
import HeroImage from "@/app/ui/components/HeroImage";

export default function Page() {
  
  return (
    <main className="flex flex-col">
        <NavBar target={null} />
        <HeroImage path="/img/banner.jpg" />
      <h1>This is the all cities page</h1>
    </main>
  );
}
