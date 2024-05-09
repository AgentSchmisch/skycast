"use client"

import React from 'react';
import NavBar from '@/app/ui/components/NavBar';
import HeroImage from '@/app/ui/components/HeroImage';
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

export default function Page({ params }: { params: { slug: string } }) {

    const [data, setData] = useState<any>(null);
    const [ImageData,setImageData] = useState<any>(null);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${decodeURI(params.slug)}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`);
                const responseData = await response.json();
                console.log(responseData);
                setData(responseData);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        async function fetchHeroImage() {
            // Fetch hero image
            try {
                const client = createClient("dwFJHsJNrmr9SU6FnzcTOdqDhKLjBxPTo2jlnsVUBQieBs6nB0OoDMBh");
                client.photos.search({ query: decodeURI(params.slug), per_page: 5, orientation: 'landscape' }).then(photos => {
                    console.log(photos);
                    setImageData(photos);
                }
                );
            }
            catch (error) {
                console.error("Error:", error);
                setImageData(null);
            }
        }

        fetchHeroImage();
        fetchWeatherData();
    }, [params.slug]);

    return (
        <main className="flex flex-col">
            <NavBar target={null} />
            <HeroImage path = {ImageData===null||ImageData===undefined ? "/img/banner.jpg" : ImageData.photos[Math.floor(Math.random() * 4)].src.landscape} />
            <p>This is the city detail page for {decodeURI(params.slug)}</p>
            {data && (
                <div>
                    <p>Temperature: {data.main.temp} °C</p>
                </div>
            )}
        </main>
    );
}
