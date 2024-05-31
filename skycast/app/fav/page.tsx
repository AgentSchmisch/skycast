"use client"
import FavBanner from '@/app/ui/components/fav/FavBanner';
import NavBar from "@/app/ui/components/NavBar";
import FavCityCard from "@/app/ui/components/FavCityCard";
import EmbeddingURL from "@/app/ui/components/EmbeddingURL";
import Filter from "@/app/ui/components/Filter";
import { useState } from "react";

const countries = ["Germany", "Austria"]
export default function Page( params:any ) {
  // parse the page urls search parameters
    const [selectedCountry, setSelectedCountries] = useState<string[]>([]);

    const handleCountrySelection = (selectedCountry: string) => {
        setSelectedCountries(prev => {
            const isSelected = prev.includes(selectedCountry);

            if (isSelected) {
                return prev.filter(country => country !== selectedCountry);
            } else {
                return [...prev, selectedCountry];
            }
        });
        console.log(selectedCountry);
    };


  return (
      <main className="flex flex-col">
          <NavBar target={null}/>
          <FavBanner/>
          <div className="flex justify-between mt-3 ml-4">
              <Filter formFieldName={"Countries"} options={countries} handleSelection={handleCountrySelection}/>
              <EmbeddingURL/>
          </div>
          <FavCityCard countries={selectedCountry} urlParam={params.searchParams}/>
      </main>
  );
}
