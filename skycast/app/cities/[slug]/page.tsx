"use client"

import React from 'react';
import NavBar from '@/app/ui/components/NavBar';
import HeroImage from '@/app/ui/components/HeroImage';
import TemperatureBox from '@/app/ui/components/cities/TemperatureBox';
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

export default function Page({ params }: { params: { slug: string } }) {

    const [data, setData] = useState<any>(null);
    const [ImageData,setImageData] = useState<any>(null);
    const rand = Math.floor(Math.random() * 5);

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
                const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);
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
            <HeroImage path = {ImageData===null||ImageData===undefined ? "/img/banner.jpg" : ImageData.photos[rand].src.landscape} alt={ImageData===null||ImageData===undefined ?"Banner image":ImageData.photos[rand].alt} />
            <p>This is the city detail page for {decodeURI(params.slug)}</p>
            {data && (
                <>
                <div>
                    <p>Main: {data.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                    </div>
                <div>
                    <TemperatureBox temp={data.main.temp} min_temp={data.main.temp_min} max_temp={data.main.temp_max} city={params.slug} />
                    <p>Temperature: {data.main.temp} °C</p>
                    <p>Temperature max: {data.main.temp} °C</p>
                    <p>Temperature min: {data.main.temp} °C</p>
                    <p>Humidity: {data.main.humidity} %</p>
                    <p>Windspeed: {data.wind.speed} km/h</p>
                    <p>Temperature: {data.main.temp} °C</p>
                </div>
                </>
            )}
        </main>
    );
}
