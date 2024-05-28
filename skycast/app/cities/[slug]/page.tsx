"use client"

import React from 'react';
import NavBar from '@/app/ui/components/NavBar';
import HeroImage from '@/app/ui/components/HeroImage';
import TemperatureBox from '@/app/ui/components/cities/TemperatureBox';
import HumidityWindspeed from '@/app/ui/components/cities/HumidityWindspeed';
import PredictionContainer from '@/app/ui/components/cities/PredictionContainer';
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

export default function Page({ params }: { params: { slug: string } }) {

    const [data, setData] = useState<any>(null);
    const [ImageData, setImageData] = useState<any>(null);
    const [prediction, setPrediction] = useState<any>(null);


    useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${decodeURI(params.slug)}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        async function fetchPrediction() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${decodeURI(params.slug)}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`);
                const responseData = await response.json();
                const grouped_prediction_object : any[] = [];
                for (let i = 0; i < responseData.cnt; i++) {
                    if (grouped_prediction_object[responseData.list[i].dt_txt.split(" ")[0]] === undefined) {
                        grouped_prediction_object[responseData.list[i].dt_txt.split(" ")[0]] = [];
                    }
                    else {
                        grouped_prediction_object[responseData.list[i].dt_txt.split(" ")[0]].push({ "temp": responseData.list[i].main.temp, "icon": responseData.list[i].weather[0].icon, "date": responseData.list[i].dt_txt.split(" ")[0] });
                    }
                }
                const grouped_prediction_data = [];
                for (let key in grouped_prediction_object) {
                    // Get the average temperature for the day
                    let temp = 0;
                    for (let i = 0; i < grouped_prediction_object[key].length; i++) {
                        temp += grouped_prediction_object[key][i].temp;
                    }
                    // round the temperature
                    temp = Math.round(temp / grouped_prediction_object[key].length);
                    //create an array from the data, so we can use the map function in the PredictionContainer
                    grouped_prediction_data.push({ "date": key, "temp": temp, "icon": grouped_prediction_object[key][0].icon});
                }

                setPrediction(grouped_prediction_data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        async function fetchHeroImage() {
            // Fetch hero image
            try {
                //create a pexels api client
                const api_key:any = process.env.NEXT_PUBLIC_PEXELS_API_KEY
                const client = createClient(api_key);
                client.photos.search({ query: decodeURI(params.slug), per_page: 5, orientation: 'landscape' }).then(photos => {
                    setImageData(photos);
                }
                );
            }
            catch (error) {
                console.error("Error:", error);
                setImageData(null);
            }
        }

        fetchPrediction();
        fetchHeroImage();
        fetchWeatherData();
    }, [params.slug]);

    return (
        <main className="flex flex-col">
            {data && (
                <>
                    <NavBar target={null} />
                    <div className="relative">
                        <HeroImage image={ImageData === null || ImageData === undefined ? "/img/banner.jpg" : ImageData.photos[Math.floor(Math.random() * ImageData.photos.length)]}/>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <TemperatureBox temp={data.main.temp} min_temp={data.main.temp_min} max_temp={data.main.temp_max} city={data.name} />
                    </div>
                    <div className="my-24 flex flex-col items-center">
                        <div className='w-2/3'>
                            <HumidityWindspeed data={data} />
                            <PredictionContainer data={prediction === null ? null : prediction} />
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
