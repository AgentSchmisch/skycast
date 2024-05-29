import FavButton from '@/app/ui/components/FavButton';
import Image from 'next/image';
import {useState} from "react";

export default function CityCard({city} : {city: string}) {

    // due to the main page only containing curated cities, we can make sure we have the images on the server and dont need an api call
    return (
        <div className="border rounded-xl">
            <Image className="rounded-t-xl" height={960} width={1280} src={`/img/${city.toLowerCase()}.jpg`} alt={`Hero card image of ${city}`} />
            <div className="flex justify-center bg-skycast-white rounded-b-xl">

            <FavButton city={city}/>
            <a href={`/cities/${city}`} className="p-6 font-bold">{city}</a>
            </div>
        </div>
    )
}
