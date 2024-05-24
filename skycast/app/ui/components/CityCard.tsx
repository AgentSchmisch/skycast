import FavButton from '@/app/ui/components/FavButton';
import {useState} from "react";

export default function CityCard({city} : {city: string}) {


    return (
        <div className="border rounded-xl">
            <img className="rounded-t-xl" src="/img/vienna.jpg" alt={`Hero card image of ${city}`} />
            <div className="flex justify-center bg-skycast-white rounded-b-xl">

                <FavButton city={city}/>
                <a href={`/cities/${city}`} className="p-6 font-bold">{city}</a>
            </div>
        </div>
    )
}
