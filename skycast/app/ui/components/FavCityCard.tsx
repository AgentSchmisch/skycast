import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";

export default function FavCityCard() {
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        const storedLikedCities = localStorage.getItem('likedCities');
        if (storedLikedCities) {
            const likedCities = JSON.parse(storedLikedCities);
            setCities(likedCities);
        }
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {cities.map((city, index) => (
                <div key={index} className="rounded-full bg-gray-200 relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-10 my-5">
                    <div className="flex items-center">
                        <div>
                            <img className="h-16 rounded-full" src="/img/vienna.jpg"
                                 alt={`Hero card image of ${city}`}/>
                        </div>
                        <div className="p-4">{city}</div>
                    </div>
                    <FontAwesomeIcon icon={solidHeart} size="2x" className="absolute top-1/2 transform -translate-y-1/2 right-4"/>
                </div>
            ))}
        </div>
    );
}