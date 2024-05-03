import CityCard from '@/app/ui/components/CityCard';
import Link from 'next/link';

export default function CityBox({cities} : {cities: string[]}) {

    return (
        <>
        <div className="hidden md:block">
            {
                cities.map((city, index) => (
                    (index % 3 === 0) ? (
                        <div key={index} className='flex flex-row justify-around items-center mb-6'>
                            <a href={`/cities/${cities[index]}`} className='p-2 drop-shadow-xl'>
                                <CityCard city={city} />
                            </a>
                            {cities[index + 1] && (
                                <a href={`/cities/${cities[index + 1]}`} className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 1]} />
                                </a>
                            )}
                            {cities[index + 2] && (
                                <a href={`/cities/${cities[index + 2]}`} className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 2]} />
                                </a>
                            )}
                        </div>
                    ) : null
                ))
            }
        </div>

        <div className="block md:hidden">
        {
                cities.map((city, index) => (
                    (index % 2 === 0) ? (
                        <div key={index} className='flex flex-row justify-around items-center mb-6'>
                            <a href={`/cities/${cities[index]}`} className='p-2 drop-shadow-xl'>
                                <CityCard city={city} />
                            </a>
                            {cities[index + 1] && (
                                <a href={`/cities/${cities[index + 1]}`} className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 1]} />
                                </a>
                            )}
                        </div>
                    ) : null
                ))
            }
        </div>
        </>
    );
}