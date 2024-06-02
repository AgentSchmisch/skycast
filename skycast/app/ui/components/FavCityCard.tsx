"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function FavCityCard({urlParam, countries}: {urlParam: any, countries: string[]}) {
    const [cities, setCities] = useState<string[]>([]);
    const [citiesAustria, setCitiesAustria] = useState<string[]>(["Vienna", "Linz", "Graz", "St. Pölten", "Salzburg", "Innsbruck"]);
    const [citiesGermany, setCitiesGerman] = useState<string[]>(["Munich", "Hamburg", "Berlin", "Dresden", "Cologne"]);
    const [filteredCities, setFilteredCities] = useState<string[]>(cities);



    useEffect(() => {
        //parse the url parameters to get the liked cities from an embedded url
        if (urlParam != undefined) {
            try{
            urlParam = urlParam.urlParam
            //parse the liked cities from the url
            const likedCities = JSON.parse(urlParam.likedCities);

            //parse the liked cities from the localstorage
            let storageItems:any = localStorage.getItem("likedCities")

            if (storageItems) {
                storageItems = JSON.parse(storageItems)
            }

            else {
                storageItems = []
            }

            for (let city of likedCities) {
                if (!storageItems.includes(city)) {
                    storageItems.push(city)
                }
            }
            localStorage.setItem('likedCities', JSON.stringify(storageItems));
            setCities(storageItems);
        }

        catch{
            console.log("error")
        }

        }
    },[]);

    useEffect(() => {
        const storedLikedCities = localStorage.getItem('likedCities');
        if (storedLikedCities) {
            const likedCities = JSON.parse(storedLikedCities);
            setCities(likedCities);
        }
    }, []);

    useEffect(() => {
        let updatedCities: string[] = cities;
        if (countries.includes("Austria") && countries.includes("Germany")) {
            setFilteredCities(updatedCities);
            console.log(cities);
            console.log(countries);
            return
        } else if (countries.includes("Austria") && !(countries.includes("Germany"))) {
            updatedCities = cities.filter(city => citiesAustria.includes(city));
            console.log(updatedCities);
        } else if (countries.includes("Germany") && !(countries.includes("Austria"))) {
            updatedCities = cities.filter(city => citiesGermany.includes(city));
            console.log(updatedCities);
        }
        setFilteredCities(updatedCities);
    }, [cities, countries]);

    return (
        <div className="flex flex-wrap justify-center mt-20">
            {filteredCities.map((city, index) => (
                <a key={index} href={`/cities/${city}`} className="rounded-full bg-gray-200 relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-10 my-5">
                    <div className="flex items-center">
                        <div>
                            <img className="h-16 rounded-full" src={`/img/${city.toLowerCase()}.jpg`}
                                alt={`Hero card image of ${city}`} />
                        </div>
                        <div className="p-4">{city}</div>
                    </div>
                    <FontAwesomeIcon icon={solidHeart} size="2x" className="absolute top-1/2 transform -translate-y-1/2 right-4" />
                </a>
            ))}
        </div>
    );
}