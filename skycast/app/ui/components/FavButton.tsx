import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function FavButton({ city }: { city: string }) {
    const [cityIsLiked, setCityIsLiked] = useState(false);
    const [likedCities, setLikedCities] = useState<string[]>([]);

    useEffect(() => {
        const storedLikedCities = localStorage.getItem('likedCities');
        if (storedLikedCities) {
            const prevLikedCities = JSON.parse(storedLikedCities);
            setLikedCities(prevLikedCities);
            setCityIsLiked(prevLikedCities.includes(city));
        }
    }, [city]);


    const handleButtonClick = () => {
        const storedLikedCities = localStorage.getItem('likedCities');

        if (storedLikedCities) {
            const prevLikedCities = JSON.parse(storedLikedCities);
            setLikedCities(prevLikedCities);

            const updatedIsLiked = !prevLikedCities.includes(city);
            setCityIsLiked(updatedIsLiked);

            let updatedLikedCities = [...prevLikedCities];

            if (updatedIsLiked) {
                updatedLikedCities.push(city);
            } else {
                const index = updatedLikedCities.indexOf(city);
                if (index !== -1) {
                    updatedLikedCities.splice(index, 1);
                }
            }

            localStorage.setItem('likedCities', JSON.stringify(updatedLikedCities));
        }
    };

    return (
        <button className="absolute top-0 right-0 mt-4 mr-4 md:h-6 text-white" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={cityIsLiked ? solidHeart : regularHeart} size="2x"/>
        </button>
    );
}
